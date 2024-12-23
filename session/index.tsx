"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function fetchServerSession() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      throw new Error("No session found");
    }
    return session;
  } catch (error) {
    console.error("Error fetching session:", error);
    throw new Error("Failed to fetch session");
  }
}
