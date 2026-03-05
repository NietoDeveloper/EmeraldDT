"use client";
import { useState, useRef, useEffect } from "react";
import { MainButton } from '@/components/ui/MainButton';
import { MuteToggle } from '@/components/ui/MuteToggle';

export const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(error => {
        console.warn("Autoplay preventivo: ", error);
      });
    }
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-24 lg:pb-32 bg-black">
      
      {/* Video Background - CLARIDAD TOTAL Y AJUSTE RESPONSIVE */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted={isMuted}

          className="w-full h-full object-cover md:object-contain object-center transition-opacity duration-700"
        >
          <source src="/assets/videos/hero-emerald.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
