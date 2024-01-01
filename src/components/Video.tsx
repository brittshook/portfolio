import { useRef, useEffect } from "react";

type Props = {
  src: string;
  type: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  setDelay?: number;
  className?: string;
};

export const Video = ({
  src,
  type,
  autoPlay,
  loop,
  muted,
  setDelay,
  className,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (loop && setDelay) {
      const handleVideoEnded = () => {
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
          }
        }, setDelay);
      };

      if (videoRef.current) {
        videoRef.current.addEventListener("ended", handleVideoEnded);
      }

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("ended", handleVideoEnded);
        }
      };
    }
  }, [autoPlay, setDelay]);

  return (
    <video
      ref={videoRef}
      autoPlay={autoPlay}
      loop={loop && !setDelay}
      muted={muted}
      className={className}
    >
      <source src={src} type={type} />
      Video could not load. Please refresh the page.
    </video>
  );
};
