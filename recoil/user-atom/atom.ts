import { atom, selector } from "recoil";

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

export const userSlideSelector = selector<number>({
  key: "userSlideSelector",
  get: ({ get }) => get(userCurrentSlideAtom),
  set: ({ set, get }, newValue) => {
    if (typeof newValue === "number") {
      const maxSlide = get(userSlideCount);
      const clampedValue = Math.max(0, Math.min(maxSlide, newValue));
      set(userCurrentSlideAtom, clampedValue);
    }
  },
});
