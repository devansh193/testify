import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Thankyou = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Card className="w-[750px]">
        <CardHeader>
          <CardTitle>thank you page</CardTitle>
          <CardDescription> This is the description page</CardDescription>
          <CardContent>Hi there</CardContent>
          <CardFooter>FOoter</CardFooter>
        </CardHeader>
      </Card>
    </div>
  );
};
