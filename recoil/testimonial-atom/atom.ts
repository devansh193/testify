import { EmailType } from "@/schema/schema";
import { atom } from "recoil";

export const testimonialTextAtom = atom<string>({
  key: "testimonialText",
  default: "",
});

export const testimonialRatingAtom = atom<number>({
  key: "testimonialRating",
  default: 0,
});

export const userNameAtom = atom<string>({
  key: "userName",
  default: "",
});

export const userEmailAtom = atom<EmailType>({
  key: "userEmail",
  default: "",
});

export const userProfessionAtom = atom<string>({
  key: "userProfession",
  default: "",
});
