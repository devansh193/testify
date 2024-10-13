import { atom } from "recoil";

type QuestionType = "rating" | "text";

interface Question {
  id: number;
  text: string;
  type: QuestionType;
}

interface RatingType {
  questionId: number;
  rating: number;
}
interface TextType {
  questionId: number;
  answer: string;
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
  default: [{ id: 1, text: "How would you rate our product?", type: "rating" }],
});

export const showLogoAtom = atom<boolean>({
  key: "showLogoAtom",
  default: true,
});

export const logoUrlAtom = atom<string>({
  key: "logoUrlAtom",
  default: "/placeholder.svg?height=80&width=80",
});

export const dialogAtom = atom<boolean>({
  key: "isDialogOpen",
  default: false,
});

export const ratingsAtom = atom<RatingType[]>({
  key: "ratingsAtom",
  default: [],
});

export const textAnswersAtom = atom<TextType[]>({
  key: "textAnswersAtom",
  default: [],
});
