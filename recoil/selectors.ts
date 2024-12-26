import { selector } from "recoil";
import {
  feedbackBoardTitleAtom,
  feedbackDescriptionAtom,
  feedbackPageTitleAtom,
  feedbackQuestionsAtom,
  personalFeedbackTitleAtom,
  ratingTitleAtom,
  thankyouDescriptionAtom,
  thankyouTitleAtom,
  videoReviewQuestionsAtom,
  videoReviewTitleAtom,
} from "./atom";

// BOARD DETAILS PAGE SELECTORS

export const feedbackBoardTitleErrorSelector = selector<string | null>({
  key: "feedbackBoardTitleErrorSelector",
  get: ({ get }) => {
    const title = get(feedbackBoardTitleAtom);
    if (title.trim().length === 0) {
      return "Title cannot be empty.";
    }
    if (title.trim().length < 3) {
      return "Title must be at least 3 characters long.";
    }
    return null;
  },
});

export const feedbackPageTitleErrorSelector = selector<string | null>({
  key: "feedbackPageTitleErrorSelector",
  get: ({ get }) => {
    const title = get(feedbackPageTitleAtom);
    if (title.trim().length === 0) {
      return "Title cannot be empty.";
    }
    if (title.trim().length < 10) {
      return "Page title must be at least 5 characters long.";
    }
    return null;
  },
});

export const feedbackDescriptionErrorSelector = selector<string | null>({
  key: "feedbackDescriptionErrorSelector",
  get: ({ get }) => {
    const description = get(feedbackDescriptionAtom);
    if (description.trim().length === 0) {
      return "Title cannot be empty.";
    }
    if (description.trim().length < 20) {
      return "Description must be at least 20 characters long.";
    }
    return null;
  },
});

// TEXT REVIEW PAGE SELECTORS

export const ratingTitleErrorSelector = selector<string | null>({
  key: "ratingTitleErrorSelector",
  get: ({ get }) => {
    const title = get(ratingTitleAtom);
    if (title.trim().length === 0) {
      return "Title cannot be empty.";
    }
    if (title.trim().length < 5) {
      return "Title must be at least 5 characters long.";
    }
    return null;
  },
});

export const feedbackQuestionsErrorSelector = selector<string | null>({
  key: "feedbackQuestionsErrorSelector",
  get: ({ get }) => {
    const questions = get(feedbackQuestionsAtom);
    if (questions.length === 0 || questions.some((q) => q.trim() === "")) {
      return "There must be at least one non-empty question.";
    }
    return null;
  },
});

// VIDEO REVIEW PAGE SELECTORS

export const videoReviewTitleErrorSelector = selector<string | null>({
  key: "videoReviewTitleErrorSelector",
  get: ({ get }) => {
    const title = get(videoReviewTitleAtom);
    if (title.trim().length === 0) {
      return "Title cannot be empty.";
    }
    if (title.trim().length < 3) {
      return "Title must be at least 3 characters long.";
    }
    return null;
  },
});

export const videoReviewQuestionsErrorSelector = selector<string | null>({
  key: "videoReviewQuestionsErrorSelector",
  get: ({ get }) => {
    const questions = get(videoReviewQuestionsAtom);
    if (questions.length === 0 || questions.every((q) => q.trim() === "")) {
      return "There must be at least one non-empty question.";
    }
    return null;
  },
});

//  PERSONAL PAGE SELECTORS

export const personalFeedbackTitleErrorSelector = selector<string | null>({
  key: "personalFeedbackTitleErrorSelector",
  get: ({ get }) => {
    const title = get(personalFeedbackTitleAtom);
    if (title.trim().length === 0) {
      return "Title cannot be empty.";
    }
    if (title.trim().length < 3) {
      return "Title must be at least 3 characters long.";
    }
    return null;
  },
});

// THANKYOU PAGE SELECTORS

export const thankyouTitleErrorSelector = selector<string | null>({
  key: "thankyouTitleErrorSelector",
  get: ({ get }) => {
    const title = get(thankyouTitleAtom);
    if (title.trim().length === 0) {
      return "Title cannot be empty.";
    }
    if (title.trim().length < 3) {
      return "Title must be at least 3 characters long.";
    }

    return null;
  },
});

export const thankyouDescriptionErrorSelector = selector<string | null>({
  key: "thankyouDescriptionErrorSelector",
  get: ({ get }) => {
    const description = get(thankyouDescriptionAtom);
    if (description.trim().length === 0) {
      return "Message cannot be empty.";
    }

    return null;
  },
});
