import React, { useEffect, useRef, useState, useCallback } from "react";
import { Heart } from "lucide-react";

interface HeartParticle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  swaySpeed: number;
  swayDistance: number;
  swayOffset: number;
  opacity: number;
  maxOpacity: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  pulsing: boolean;
  pulseSpeed: number;
  scale: number;
}

export const FloatingHearts: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(true);
  const particlesRef = useRef<HeartParticle[]>([]);
  const mouseParticlesRef = useRef<HeartParticle[]>([]);

  // Romantic color palette: soft blush, rose petal, warm champagne rose, light pink
  const heartColors = [
    "244, 114, 182", // #F472B6 soft pink
    "251, 113, 133", // #FB7185 rose blush
    "209, 63, 114", // #D13F72 deep romantic rose
    "249, 202, 216", // #F9CAD8 light blush
    "225, 29, 72", // #E11D48 crimson petal
    "224, 169, 109", // #E0A96D champagne rose-gold
    "242, 149, 180", // #F295B4 delicate rose
  ];

  const createParticle = useCallback(
    (width: number, height: number, startFromBottom = false): HeartParticle => {
      const color = heartColors[Math.floor(Math.random() * heartColors.length)];
      const size = 12 + Math.random() * 20; // 12px to 32px
      const maxOpacity = 0.25 + Math.random() * 0.45; // 0.25 to 0.70

      return {
        x: Math.random() * width,
        y: startFromBottom
          ? height + 20 + Math.random() * 40
          : Math.random() * height,
        size,
        speedY: 0.5 + Math.random() * 0.7, // gentle upward drift
        speedX: (Math.random() - 0.5) * 0.3,
        swaySpeed: 0.008 + Math.random() * 0.014,
        swayDistance: 25 + Math.random() * 45,
        swayOffset: Math.random() * Math.PI * 2,
        opacity: startFromBottom ? 0 : Math.random() * maxOpacity,
        maxOpacity,
        rotation: (Math.random() - 0.5) * 0.5,
        rotationSpeed: (Math.random() - 0.5) * 0.006,
        color,
        pulsing: Math.random() > 0.5,
        pulseSpeed: 0.02 + Math.random() * 0.03,
        scale: 1,
      };
    },
    [],
  );

  useEffect(() => {
    if (!isEnabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Populate particles evenly across the full screen from start till the end
    // Aim for 36-45 hearts across desktop, 20-25 on mobile for rich romantic atmosphere
    const count = Math.min(46, Math.max(22, Math.floor(width / 35)));
    particlesRef.current = [];
    for (let i = 0; i < count; i++) {
      particlesRef.current.push(createParticle(width, height, false));
    }

    // Optional gentle interactive hearts on mouse movement or tap
    let lastSpawnTime = 0;
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const now = Date.now();
      if (now - lastSpawnTime < 180) return; // throttle to keep elegant
      lastSpawnTime = now;

      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (mouseParticlesRef.current.length < 15) {
        const color =
          heartColors[Math.floor(Math.random() * heartColors.length)];
        mouseParticlesRef.current.push({
          x: clientX + (Math.random() - 0.5) * 20,
          y: clientY + (Math.random() - 0.5) * 20,
          size: 14 + Math.random() * 12,
          speedY: 0.8 + Math.random() * 0.8,
          speedX: (Math.random() - 0.5) * 0.6,
          swaySpeed: 0.02,
          swayDistance: 20,
          swayOffset: Math.random() * Math.PI,
          opacity: 0.75,
          maxOpacity: 0.75,
          rotation: (Math.random() - 0.5) * 0.4,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          color,
          pulsing: true,
          pulseSpeed: 0.05,
          scale: 0.8,
        });
      }
    };

    window.addEventListener("mousemove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });

    // Draw heart path on canvas
    const drawHeart = (
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      color: string,
      alpha: number,
      rotation: number,
      scaleMultiplier: number,
    ) => {
      context.save();
      context.translate(x, y);
      context.rotate(rotation);
      const effectiveSize = (size / 30) * scaleMultiplier;
      context.scale(effectiveSize, effectiveSize);
      context.beginPath();

      // Precise romantic heart curve
      context.moveTo(0, 7);
      context.bezierCurveTo(-14, -10, -26, 4, 0, 24);
      context.bezierCurveTo(26, 4, 14, -10, 0, 7);

      context.fillStyle = `rgba(${color}, ${Math.max(0, Math.min(1, alpha))})`;
      context.shadowColor = `rgba(${color}, ${alpha * 0.5})`;
      context.shadowBlur = 8;
      context.fill();
      context.restore();
    };

    let time = 0;
    const render = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // 1. Render ambient continuous hearts
      particlesRef.current.forEach((p) => {
        p.y -= p.speedY;
        p.rotation += p.rotationSpeed;

        // Fade in when entering from bottom, fade out near top
        if (p.y > height - 100) {
          p.opacity = Math.min(p.maxOpacity, p.opacity + 0.01);
        } else if (p.y < 80) {
          p.opacity = Math.max(0, (p.y / 80) * p.maxOpacity);
        } else {
          p.opacity = Math.min(p.maxOpacity, p.opacity + 0.005);
        }

        // Pulse scale gently
        if (p.pulsing) {
          p.scale = 1 + Math.sin(time * p.pulseSpeed) * 0.12;
        }

        const currentX =
          p.x + Math.sin(time * p.swaySpeed + p.swayOffset) * p.swayDistance;

        // Reset to bottom if drifted off top
        if (p.y < -40) {
          Object.assign(p, createParticle(width, height, true));
        }

        drawHeart(
          ctx,
          currentX,
          p.y,
          p.size,
          p.color,
          p.opacity,
          p.rotation,
          p.scale,
        );
      });

      // 2. Render interactive mouse/touch hearts
      for (let i = mouseParticlesRef.current.length - 1; i >= 0; i--) {
        const mp = mouseParticlesRef.current[i];
        mp.y -= mp.speedY;
        mp.x += mp.speedX;
        mp.opacity -= 0.012;
        mp.scale += 0.008;

        if (mp.opacity <= 0 || mp.y < -20) {
          mouseParticlesRef.current.splice(i, 1);
        } else {
          drawHeart(
            ctx,
            mp.x,
            mp.y,
            mp.size,
            mp.color,
            mp.opacity,
            mp.rotation,
            mp.scale,
          );
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled, createParticle]);

  return (
    <>
      {isEnabled && (
        <canvas
          ref={canvasRef}
          className="fixed inset-0 pointer-events-none z-30"
          style={{ willChange: "transform" }}
          aria-hidden="true"
        />
      )}

      {/* Discreet floating heart toggle button in bottom left corner */}
      <button
        onClick={() => setIsEnabled(!isEnabled)}
        title={isEnabled ? "Pause floating hearts" : "Enable floating hearts"}
        className="fixed bottom-4 left-4 z-40 p-2.5 rounded-full bg-white/90 backdrop-blur-md border border-[#FCE7ED] text-[#D13F72] hover:bg-white hover:shadow-md transition-all duration-300 opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#F295B4] group"
        aria-label="Toggle floating hearts"
      >
        <Heart
          className={`w-4 h-4 transition-transform duration-300 ${
            isEnabled ? "fill-current animate-pulse-gentle" : "opacity-40"
          }`}
        />
      </button>
    </>
  );
};
