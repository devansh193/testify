import React from "react";
import { useRecoilState } from "recoil";
import { thankYouMessageSelector } from "@/recoil/atom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ThankYou: React.FC = React.memo(() => {
  const [thankYouMessage, setThankYouMessage] = useRecoilState(
    thankYouMessageSelector
  );

  return (
    <div>
      <Label htmlFor="thankYouMessage">Thank You Message</Label>
      <Input
        id="thankYouMessage"
        placeholder="Enter your thank you message"
        className="mt-1"
        value={thankYouMessage}
        onChange={(e) => setThankYouMessage(e.target.value)}
      />
    </div>
  );
});

ThankYou.displayName = "ThankYou";

export default ThankYou;
