import { Logout } from "./logout";

export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 pt-32">
      <p>{message}</p>
      <p>
        If you think this is a mistake, please email{" "}
        <a
          href="mailto:supportTestify@gmail.com"
          className="text-blue-500 hover:underline"
        >
          supportTestify@gmail.com
        </a>
      </p>
      <p className="mt-4">Try logging in again:</p>
      <Logout />
    </div>
  );
};
