import { getServerSession, Session } from "next-auth";
import { ErrorHandler } from "./error";
import { withServerActionAsyncCatcher } from "./async-catch";
import { authOptions } from "./auth";

type withSessionType<T, R> = (session: Session, args?: T) => Promise<R>;

export function withSession<T, R>(
  serverAction: withSessionType<T, R>
): (args?: T) => Promise<R> {
  console.log("Inside with_session");
  return withServerActionAsyncCatcher(async (args?: T) => {
    console.log("Before session is caught");
    const session = await getServerSession(authOptions);
    console.log("After session is caught");
    if (!session || !session.user) {
      throw new ErrorHandler(
        "You must be authenticated to access this resource.",
        "UNAUTHORIZED"
      );
    }
    return await serverAction(session, args);
  });
}
