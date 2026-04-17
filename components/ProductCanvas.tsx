"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useTransform, useMotionValueEvent } from "framer-motion";

interface ProductCanvasProps {
  progress: MotionValue<number>;
}

export default function ProductCanvas({ progress }: ProductCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sampledColorRef = useRef(false);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const frameCount = 192; // 0 to 191

  // Transform 0-1 progress to 0-117 integer
  const currentFrame = useTransform(progress, [0, 1], [0, frameCount - 1], {
    clamp: true,
  });

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = `/sequence/frame_${i}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages(loadedImages);
          setIsLoaded(true);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Drawing logic
  const drawImage = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[frameIndex]) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Make canvas sharp on high DPI screens
    const dpr = window.devicePixelRatio || 1;
    const cw = canvas.parentElement?.clientWidth || window.innerWidth;
    const ch = canvas.parentElement?.clientHeight || window.innerHeight;

    // only resize if dims changed to avoid flickering
    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
      canvas.style.width = `${cw}px`;
      canvas.style.height = `${ch}px`;
      ctx.scale(dpr, dpr);
    }
    
    // Force high-quality image interpolation
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.clearRect(0, 0, cw, ch);

    const img = images[frameIndex];

    // Change to 'Cover' scaling logic to eliminate side borders completely
    const imgRatio = img.width / img.height;
    const canvasRatio = cw / ch;
    let drawWidth, drawHeight;

    if (canvasRatio > imgRatio) {
      // Screen is wider than image. Scale width to cover.
      drawWidth = cw;
      drawHeight = cw / imgRatio;
    } else {
      // Screen is taller than image. Scale height to cover.
      drawHeight = ch;
      drawWidth = ch * imgRatio;
    }

    // Add a zoom factor on top of cover to ensure absolute edge bleed 
    const zoomFactor = 1.05; 
    drawWidth *= zoomFactor;
    drawHeight *= zoomFactor;

    const x = (cw - drawWidth) / 2;
    // Push the image 80 pixels lower on the screen than dead-center
    const y = ((ch - drawHeight) / 2) + 80;

    ctx.drawImage(img, x, y, drawWidth, drawHeight);

    // Dynamically sample the image's actual background color from the source image itself
    if (!sampledColorRef.current && frameIndex === 0) {
      try {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = 1;
        tempCanvas.height = 1;
        const tempCtx = tempCanvas.getContext('2d');
        if (tempCtx) {
          // Draw the absolute top-left pixel of the source JPG
          tempCtx.drawImage(img, 0, 0, 1, 1, 0, 0, 1, 1);
          const pixel = tempCtx.getImageData(0, 0, 1, 1).data;
          // Set in the format expected by Tailwind css variables: "R G B"
          document.documentElement.style.setProperty('--bg-canvas', `${pixel[0]} ${pixel[1]} ${pixel[2]}`);
          sampledColorRef.current = true;
        }
      } catch (e) {
        console.error("Could not sample image background color", e);
      }
    }
  };

  // Draw initial frame once loaded
  useEffect(() => {
    if (isLoaded) {
      drawImage(0);
    }
    
    // Handle resizes
    const handleResize = () => {
      if (isLoaded) drawImage(Math.round(currentFrame.get()));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  // Update canvas on scroll
  useMotionValueEvent(currentFrame, "change", (latest) => {
    if (isLoaded) {
      drawImage(Math.round(latest));
    }
  });

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10 transition-opacity">
          <div className="w-8 h-8 border-4 border-gray-400 border-t-primary rounded-full animate-spin"></div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain"
        style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.6s ease-in" }}
      />
    </div>
  );
}
