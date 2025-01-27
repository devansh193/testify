import React, { useRef, useState, useCallback, useEffect } from "react";
import { Camera, Video, X, Check, Timer } from "lucide-react";
import RecordRTC from "recordrtc";

const VideoRecorder: React.FC = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recorder, setRecorder] = useState<RecordRTC | null>(null);
  const [recordedVideo, setRecordedVideo] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const recordedVideoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<number>();

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        await videoRef.current.play();
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    if (isRecording) {
      timerRef.current = window.setInterval(() => {
        setRecordingDuration((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      setRecordingDuration(0);
    }
    return () => clearInterval(timerRef.current);
  }, [isRecording]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const stopCamera = useCallback(() => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }
  }, [stream]);

  const startRecording = () => {
    if (stream) {
      const newRecorder = new RecordRTC(stream, {
        type: "video",
        mimeType: "video/webm",
      });
      newRecorder.startRecording();
      setRecorder(newRecorder);
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stopRecording(() => {
        const blob = recorder.getBlob();
        const videoURL = URL.createObjectURL(blob);
        setRecordedVideo(videoURL);
        setIsRecording(false);
      });
    }
  };

  const discardRecording = () => {
    if (recordedVideo) {
      URL.revokeObjectURL(recordedVideo);
      setRecordedVideo(null);
    }
  };

  const keepRecording = () => {
    console.log("Video kept:", recordedVideo);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Video Recorder</h1>
        <p className="text-gray-400">
          Create and preview your recordings with ease
        </p>
      </div>

      <div className="space-y-8">
        {!stream && (
          <button
            onClick={startCamera}
            className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 px-8 rounded-xl hover:bg-gray-100 transition-all duration-300 text-lg font-medium"
          >
            <Camera className="w-6 h-6" />
            Open Camera
          </button>
        )}

        {stream && (
          <div className="space-y-6">
            <div className="relative rounded-xl overflow-hidden bg-black aspect-video ring-4 ring-white/10">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover [transform:scaleX(-1)]"
              />

              {isRecording && (
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 text-white px-3 py-1.5 rounded-lg backdrop-blur-sm">
                  <span className="animate-pulse text-red-500">●</span>
                  <Timer className="w-4 h-4" />
                  <span className="font-mono">
                    {formatDuration(recordingDuration)}
                  </span>
                </div>
              )}

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                {!isRecording ? (
                  <button
                    onClick={startRecording}
                    className="bg-red-600 text-white py-3 px-8 rounded-full hover:bg-red-700 transition-all duration-300 flex items-center gap-2 font-medium shadow-lg hover:shadow-red-500/20"
                  >
                    <Video className="w-5 h-5" />
                    Start Recording
                  </button>
                ) : (
                  <button
                    onClick={stopRecording}
                    className="bg-white text-black py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 font-medium"
                  >
                    <span className="w-2 h-2 bg-red-600 rounded-sm" />
                    Stop Recording
                  </button>
                )}
              </div>
            </div>

            {!isRecording && (
              <button
                onClick={stopCamera}
                className="w-full bg-white/10 text-white py-3 px-4 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                Close Camera
              </button>
            )}
          </div>
        )}

        {recordedVideo && (
          <div className="space-y-6 bg-white/5 p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <Video className="w-5 h-5" />
              Preview Recording
            </h2>
            <video
              ref={recordedVideoRef}
              src={recordedVideo}
              controls
              className="w-full rounded-xl ring-4 ring-white/10 [transform:scaleX(-1)]"
            />

            <div className="flex gap-4">
              <button
                onClick={keepRecording}
                className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300 font-medium"
              >
                <Check className="w-5 h-5" />
                Keep Recording
              </button>
              <button
                onClick={discardRecording}
                className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white py-3 px-6 rounded-xl hover:bg-white/20 transition-all duration-300 font-medium"
              >
                <X className="w-5 h-5" />
                Discard Recording
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoRecorder;
