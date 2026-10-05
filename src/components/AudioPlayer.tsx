import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);

  // Soft romantic arpeggio notes in F Major / D Minor Pentatonic (Hz)
  const notes = [
    174.61, // F3
    220.0, // A3
    261.63, // C4
    329.63, // E4
    349.23, // F4
    440.0, // A4
    523.25, // C5
    659.25, // E5
  ];

  const playChime = (frequency: number) => {
    if (!audioCtxRef.current) return;
    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);

    // Warm soft envelope: gentle attack, lingering decay like a music box or harp
    gainNode.gain.setValueAtTime(0.0001, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 0.15);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.8);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 2.9);
  };

  const startMusicLoop = () => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }

    let step = 0;
    const progression = [0, 2, 4, 6, 3, 5, 2, 4, 1, 3, 5, 7, 4, 2, 0, 3];

    const tick = () => {
      const noteIndex = progression[step % progression.length];
      playChime(notes[noteIndex]);
      step++;
      // Every few beats play a soft sub-harmonic root note for warmth
      if (step % 4 === 0) {
        setTimeout(() => {
          playChime(notes[0] * 0.5); // Warm bass foundation
        }, 120);
      }
      timerRef.current = window.setTimeout(tick, 900);
    };

    tick();
  };

  const stopMusicLoop = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const toggleMusic = () => {
    setHasInteracted(true);
    if (isPlaying) {
      stopMusicLoop();
      setIsPlaying(false);
    } else {
      startMusicLoop();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopMusicLoop();
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="relative">
      <button
        onClick={toggleMusic}
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 border ${
          isPlaying
            ? "bg-[#FCE7ED] border-[#F295B4] text-[#9D174D] shadow-xs"
            : "bg-white/70 border-[#FCE7ED] text-[#713F5B] hover:bg-white hover:text-[#9D174D]"
        }`}
        title={isPlaying ? "Pause romantic music" : "Play romantic music"}
        aria-label="Toggle wedding music"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#D13F72]" />
            <span className="hidden sm:inline">Melody Playing</span>
          </>
        ) : (
          <>
            <Music className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Play Melody</span>
          </>
        )}
      </button>
    </div>
  );
};
