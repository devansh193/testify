"use client";

import type React from "react";
import { useRef, useState, useCallback, useEffect } from "react";
import { Camera, Video, X, Check, Timer, Loader2 } from "lucide-react";
import RecordRTC from "recordrtc";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const VideoRecorder: React.FC = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [recorder, setRecorder] = useState<RecordRTC | null>(null);
  const [recordedVideo, setRecordedVideo] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const recordedVideoRef = useRef<HTMLVideoElement>(null);
  const timerRef = useRef<number>();

  const startCamera = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
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
    // Here you would typically upload the video or process it further
  };

  return (
    <Card className="w-full max-w-2xl mx-auto mt-4">
      <CardHeader>
        <CardTitle className="text-xl font-medium">Recorder</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {!stream && (
          <div className="flex flex-col items-center justify-center space-y-4 p-12 border-2 border-dashed border-gray-300 rounded-lg">
            <Camera className="w-12 h-12 text-gray-400" />
            <p className="text-sm text-gray-500">No camera connected</p>
            <Button onClick={startCamera} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <Camera className="mr-2 h-4 w-4" />
                  Start Camera
                </>
              )}
            </Button>
          </div>
        )}
        {stream && (
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden bg-black aspect-video">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover [transform:scaleX(-1)]"
              />
              {isRecording && (
                <div className="absolute top-4 left-4 flex items-center space-x-2 bg-black/50 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                  <span className="animate-pulse text-red-500">●</span>
                  <Timer className="w-4 h-4" />
                  <span className="font-mono text-sm">
                    {formatDuration(recordingDuration)}
                  </span>
                </div>
              )}
            </div>
            <div className="flex justify-center space-x-4">
              {!isRecording ? (
                <Button onClick={startRecording} variant="destructive">
                  <Video className="mr-2 h-4 w-4" />
                  Start Recording
                </Button>
              ) : (
                <Button onClick={stopRecording} variant="secondary">
                  <span className="mr-2 w-2 h-2 bg-red-600 rounded-full" />
                  Stop Recording
                </Button>
              )}
              {!isRecording && (
                <Button onClick={stopCamera} variant="outline">
                  Close Camera
                </Button>
              )}
            </div>
          </div>
        )}
        {recordedVideo && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Preview Recording</h3>
            <video
              ref={recordedVideoRef}
              src={recordedVideo}
              controls
              className="w-full rounded-lg [transform:scaleX(-1)]"
            />
            <div className="flex space-x-4">
              <Button onClick={keepRecording} className="flex-1">
                <Check className="mr-2 h-4 w-4" />
                Keep Recording
              </Button>
              <Button
                onClick={discardRecording}
                variant="outline"
                className="flex-1"
              >
                <X className="mr-2 h-4 w-4" />
                Discard Recording
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Progress value={recordingDuration} max={180} className="w-full" />
      </CardFooter>
    </Card>
  );
};

export default VideoRecorder;
