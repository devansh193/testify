import { EmailType } from "@/schema";
import { atom, selector } from "recoil";
import { UserTestimonialSchema } from "@/schema/index";

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

type testimonialStateType = Partial<typeof UserTestimonialSchema>;

export const testimonialState = atom<testimonialStateType>({
  key: "testimonialState",
  default: {},
});

export const testimonialStateSelector = selector<testimonialStateType>({
  key: "testimonialStateSelector",
  get: ({ get }) => {
    const textReview = get(testimonialTextAtom);
    const rating = get(testimonialRatingAtom);
    const name = get(userNameAtom);
    const email = get(userEmailAtom);
    const profession = get(userProfessionAtom);

    return {
      textReview,
      rating,
      name,
      email,
      profession,
    } as testimonialStateType;
  },
});
