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
      
      {/* Video Background - Optimización para Desktop (310px - 1900px) */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted={isMuted}
          /* object-cover en mobile para impacto visual, object-contain en desktop para no cortar la esmeralda */
          className="w-full h-full object-cover md:object-contain object-center transition-opacity duration-700"
        >
          <source src="/assets/videos/hero-emerald.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Efecto Scanline SpaceX - Textura técnica sutil */}
      <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]" />

      {/* Gradiente base para legibilidad de UI */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[2] pointer-events-none" />

      {/* Content Layer */}
      <div className="w-full max-w-[1900px] mx-auto px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 z-10 animate-fade-in relative">
        




    </section>
  );
};