import { ProductWithQuestions } from "@/action/product";
import { atom } from "recoil";

interface Question {
  id: number;
  text: string;
}
export const nameAtom = atom<string>({
  key: "nameAtom",
  default: "",
});

export const emailAtom = atom<string>({
  key: "emailAtom",
  default: "",
});

export const imageAtom = atom<File | null>({
  key: "imageAtom",
  default: null,
});

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
  default: [{ id: 1, text: "How would you rate our product?" }],
});

export const showLogoAtom = atom<boolean>({
  key: "showLogoAtom",
  default: true,
});

export const logoUrlAtom = atom<string>({
  key: "logoUrlAtom",
  default: "/placeholder.svg?height=80&width=80",
});

export const productAtom = atom<ProductWithQuestions | null>({
  key: "productAtom",
  default: null,
});

export const dialogAtom = atom<boolean>({
  key: "isDialogOpen",
  default: false,
});

export const ratingsAtom = atom({
  key: "ratingsAtom",
  default: 0,
});

export const textReviewAtom = atom<string>({
  key: "textReviewAtom",
  default: "",
});

export const productId = atom<string>({
  key: "idAtom",
  default: "",
});
