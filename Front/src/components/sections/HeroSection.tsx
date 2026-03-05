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
      
      {/* Video Background - CLARIDAD TOTAL */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          muted={isMuted}
          /* ELIMINADO: grayscale y brightness reducido. Ahora es 100% natural. */
          className="w-full h-full object-cover"
        >
          <source src="/assets/videos/hero-emerald.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Efecto Scanline SpaceX - Mantenido al 10% para textura técnica sin oscurecer */}
      <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%]" />

      {/* ELIMINADOS: Overlays de contraste y gradientes negros pesados */}
      {/* Solo un degradado mínimo en la base para que los botones respiren */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-[2] pointer-events-none" />

      {/* Content Layer */}
      <div className="w-full max-w-[1900px] mx-auto px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 z-10 animate-fade-in relative">
        


      </div>

      {/* Control de Audio Flotante */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-20">
        <MuteToggle isMuted={isMuted} onToggle={toggleMute} />
      </div>

      {/* Indicador de Scroll SpaceX Style */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50 z-10 pointer-events-none">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>

    </section>
  );
};