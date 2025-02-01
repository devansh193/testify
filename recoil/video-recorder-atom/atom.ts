import { atom } from "recoil";
import RecordRTC from "recordrtc";

export const streamAtom = atom<MediaStream | null>({
  key: "streamAtom",
  default: null,
});

export const recorderAtom = atom<RecordRTC | null>({
  key: "recorderAtom",
  default: null,
});

export const recordedVideoAtom = atom<string | null>({
  key: "recordedVideoAtom",
  default: null,
});

export const isRecordingAtom = atom<boolean>({
  key: "isRecordingAtom",
  default: false,
});

export const recordingDurationAtom = atom<number>({
  key: "recordingDurationAtom",
  default: 0,
});
