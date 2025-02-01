import { BoardType } from "@/schema";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const clientBoardDetails = atom<BoardType>({
  key: "clientBoardDetails",
  default: {
    boardTitle: "",
    pageTitle: "",
    pageDescription: "",
    isVideoReview: false,
    textReviewPageTitle: "",
    textQuestions: [],
    videoReviewPageTitle: "",
    videoQuestions: [],
    personalPageTitle: "",
    thankYouPageTitle: "",
    thankYouPageMessage: "",
    userId: "",
  },
  effects_UNSTABLE: [persistAtom],
});
