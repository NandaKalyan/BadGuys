import { useEffect, useRef } from "react";

const VIDEO_SRC = "/wolf-turning-head.mp4";

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let targetTime = 0;
    let seeking = false;

    const seekTo = (time: number) => {
      const duration = video.duration;
      if (!duration || Number.isNaN(duration)) return;

      const clamped = Math.min(Math.max(time, 0), duration);
      targetTime = clamped;

      if (!seeking) {
        seeking = true;
        video.currentTime = targetTime;
      }
    };

    const handleSeeked = () => {
      if (Math.abs(video.currentTime - targetTime) > 0.01) {
        video.currentTime = targetTime;
      } else {
        seeking = false;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const duration = video.duration;
      if (!duration || Number.isNaN(duration)) return;

      // Absolute cursor position -> absolute point in the video.
      // Far left = start of clip, far right = end of clip.
      const ratio = Math.min(Math.max(e.clientX / window.innerWidth, 0), 1);
      seekTo(ratio * duration);
    };

    video.addEventListener("seeked", handleSeeked);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      video.removeEventListener("seeked", handleSeeked);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="fixed inset-0 z-0 h-full w-full object-cover"
      style={{ objectPosition: "50% center" }}
      src={VIDEO_SRC}
      muted
      playsInline
      preload="auto"
    />
  );
}
