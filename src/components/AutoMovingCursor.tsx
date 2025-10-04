"use client";
import { useEffect, useRef } from 'react';

interface AutoMovingCursorProps {
  size?: number;
  color?: string;
  speed?: number;
  label?: string;
  triangleSize?: number;
}

export default function AutoMovingCursor({
  size = 24,
  color = '#3b82f6',
  speed = 5,
  label = "Developer",
  triangleSize = 30 // Even smaller
}: AutoMovingCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    let startTime: number;
    const cursor = cursorRef.current;
    const label = labelRef.current;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      const progress = (elapsed % (speed * 1000)) / (speed * 1000);
      
      let x, y;
      
      // Very small centered triangle
      const centerX = 50;
      const centerY = 50;
      const radius = triangleSize / 2;
      
      if (progress < 0.33) {
        // Top to right
        const segmentProgress = progress / 0.33;
        x = centerX + (radius * Math.cos(-Math.PI/2 + (segmentProgress * 2*Math.PI/3)));
        y = centerY + (radius * Math.sin(-Math.PI/2 + (segmentProgress * 2*Math.PI/3)));
      } else if (progress < 0.66) {
        // Right to bottom-left
        const segmentProgress = (progress - 0.33) / 0.33;
        x = centerX + (radius * Math.cos(Math.PI/6 + (segmentProgress * 2*Math.PI/3)));
        y = centerY + (radius * Math.sin(Math.PI/6 + (segmentProgress * 2*Math.PI/3)));
      } else {
        // Bottom-left back to top
        const segmentProgress = (progress - 0.66) / 0.34;
        x = centerX + (radius * Math.cos(5*Math.PI/6 + (segmentProgress * 2*Math.PI/3)));
        y = centerY + (radius * Math.sin(5*Math.PI/6 + (segmentProgress * 2*Math.PI/3)));
      }

      // Convert percentage to pixels
      const viewportX = (x / 100) * window.innerWidth;
      const viewportY = (y / 100) * window.innerHeight;

      // Update cursor position
      cursor.style.left = `${viewportX}px`;
      cursor.style.top = `${viewportY}px`;

      // Update label position
      if (label) {
        label.style.left = `${viewportX + 20}px`;
        label.style.top = `${viewportY + 20}px`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      startTime = performance.now();
      animationRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [speed, triangleSize]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div
        ref={cursorRef}
        className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <svg
          className="w-full h-full"
          style={{ color }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
        >
          <path
            fill="currentColor"
            d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
          />
        </svg>
      </div>

      <div
        ref={labelRef}
        className="absolute bg-blue-500 text-white px-2 py-1 text-sm shadow-lg transform -translate-y-1/2 transition-all duration-100"
      >
        {label}
      </div>
    </div>
  );
}