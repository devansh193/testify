import { atom } from "recoil";

type QuestionType = "rating" | "text";

interface Question {
  id: number;
  text: string;
  type: QuestionType;
}

export const titleAtom = atom<string>({
  key: "titleAtom",
  default: "Your Product Name",
});


export const descriptionAtom = atom<string>({
  key: "descriptionAtom",
  default: "Describe your product or service here",
});


export const questionsAtom = atom<Question[]>({
  key: "questionsAtom",
  default: [
    { id: 1, text: "How would you rate our product?", type: "rating" },
  ],
});


export const showLogoAtom = atom<boolean>({
  key: "showLogoAtom",
  default: true,
});


export const logoUrlAtom = atom<string>({
  key: "logoUrlAtom",
  default: "/placeholder.svg?height=80&width=80",
});
