import { NextAuthOptions, Session } from "next-auth";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

import { emailSchema, passwordSchema } from "@/schema/schema";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";
import prisma from "@/lib/db";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { type: "text", placeholder: "Email" },
        password: { type: "password", placeholder: "Password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Missing credentials");
        }

        const validatedEmail = emailSchema.safeParse(credentials.email);
        if (!validatedEmail.success) {
          throw new Error("Invalid email format");
        }

        const validatedPassword = passwordSchema.safeParse(
          credentials.password
        );
        if (!validatedPassword.success) {
          throw new Error(validatedPassword.error.issues[0].message);
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: validatedEmail.data },
          });

          if (!user) {
            return null;
          }

          if (!user.password) {
            const hashedPassword = await bcrypt.hash(
              validatedPassword.data,
              10
            );

            const updatedUser = await prisma.user.update({
              where: { email: validatedEmail.data },
              data: { password: hashedPassword },
            });
            return updatedUser;
          }

          const passwordMatch = await bcrypt.compare(
            validatedPassword.data,
            user.password
          );
          if (!passwordMatch) {
            throw new Error("Invalid password");
          }

          return user;
        } catch (error) {
          if (error instanceof PrismaClientInitializationError) {
            throw new Error("Database connection error");
          }
          console.error("Authorization error:", error);
          throw new Error("Authorization failed");
        }
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  secret: process.env.NEXT_AUTH_SECRET ?? "secret",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.email = profile.email as string;
        token.id = account.providerAccountId;
      }
      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      try {
        const user = await prisma.user.findUnique({
          where: { email: token.email ?? undefined },
        });

        if (user && session && session.user) {
          session.user.id = user.id as string;
        }
      } catch (error) {
        if (error instanceof PrismaClientInitializationError) {
          throw new Error("Database connection error");
        }
        console.error("Session error:", error);
        throw new Error("Failed to fetch user session");
      }
      return session;
    },
  },
};
