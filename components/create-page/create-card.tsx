import { useRecoilValue } from "recoil";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { descriptionAtom, titleAtom } from "@/recoil/atom";

export const CreateCard = () => {
  const title = useRecoilValue(titleAtom);
  const description = useRecoilValue(descriptionAtom);
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};
