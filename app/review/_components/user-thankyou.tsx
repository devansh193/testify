interface UserThankyouProps {
  title: string;
  message: string;
}
export const UserThankyou = ({ title, message }: UserThankyouProps) => {
  return (
    <div className="flex flex-col p-4 md:p-8">
      <div className="flex items-center justify-center mt-24 sm:mt-60">
        <div className="max-w-[600px] flex flex-col items-start justify-start gap-y-4 sm:gap-y-2">
          <h1 className="text-5xl">{title}</h1>
          <p className="text-xl mt-2 text-justify">{message}</p>
        </div>
      </div>
    </div>
  );
};
