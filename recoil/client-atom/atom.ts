import { Board } from "@prisma/client";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const clientBoardDetails = atom<Board>({
  key: "clientBoardDetails",
  default: {
    id: "",
    boardTitle: "",
    isActive: null,
    pageTitle: "",
    pageDescription: "",
    isVideoReview: false,
    textReviewPageTitle: null,
    textQuestions: [],
    videoReviewPageTitle: "",
    videoQuestions: [],
    personalPageTitle: "",
    thankYouPageTitle: "",
    thankYouPageMessage: "",
    userId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  effects_UNSTABLE: [persistAtom],
});
