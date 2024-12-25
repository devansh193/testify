import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

// type RefreshDbFn = (args: { userId: string; email: string }) => Promise<{
//   error: boolean;
//   message: string;
// }>;

export const refreshDb = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user.email || "";
  const userId = session?.user.id;
  return await refreshDbInternal(userId, email);
};

export async function refreshDbInternal(userId?: string, email?: string) {
  if (!email) {
    return {
      error: true,
      message: "You are not logged in",
    };
  }
}
