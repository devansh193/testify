import { atom } from "recoil";

export const userCurrentSlideAtom = atom({
  key: "userCurrentSlideAtom",
  default: 0,
});

export const userSlideCount = atom({
  key: "userSlideCount",
  default: 0,
});

export const userPreviousSlideAtom = atom({
  key: "userPreviousSlideAtom",
  default: 0,
});

export const userSideBoardTitle = atom({
  key: "userSideBoardTitle",
  default: "",
});
