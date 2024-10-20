import { NextAuthOptions, Session } from "next-auth";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

import { SigninSchema } from "@/schema/schema";
import { PrismaClientInitializationError } from "@prisma/client/runtime/library";
import prisma from "@/lib/db";
import { ErrorHandler } from "./error";

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
          throw new ErrorHandler("Missing credentials", "VALIDATION_ERROR");
        }

        // Validate email format
        const validatedCredentials = SigninSchema.safeParse(credentials);
        if (!validatedCredentials.success) {
          throw new ErrorHandler("Input validation failed", "VALIDATION_ERROR");
        }

        try {
          const user = await prisma.user.findUnique({
            where: { email: validatedCredentials.data.email },
          });

          if (!user) {
            throw new ErrorHandler(
              "User with email does not exist",
              "CONFLICT"
            );
          }

          const passwordMatch = await bcrypt.compare(
            validatedCredentials.data.password,
            user.password
          );
          if (!passwordMatch) {
            throw new ErrorHandler(
              "Password is incorrect",
              "AUTHENTICATION_FAILED"
            );
          }

          return user;
        } catch (error) {
          if (error instanceof PrismaClientInitializationError) {
            throw new ErrorHandler(
              "Database connection error",
              "DATABASE_ERROR"
            );
          }
          if (error instanceof ErrorHandler) {
            throw error;
          }
          throw new ErrorHandler("Internal server error", "DATABASE_ERROR");
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
