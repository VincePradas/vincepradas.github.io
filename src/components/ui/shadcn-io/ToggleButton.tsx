"use client";

import { Moon, Sun } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

type AnimationVariant = "circle" | "circle-blur" | "gif" | "polygon";
type StartPosition =
  | "center"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface ThemeToggleButtonProps {
  showLabel?: boolean;
  variant?: AnimationVariant;
  start?: StartPosition;
  url?: string;
  className?: string;
}

export const ThemeToggleButton = ({
  showLabel = false,
  variant = "circle",
  start = "center",
  className,
}: ThemeToggleButtonProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");

    const styleId = `theme-transition-${Date.now()}`;
    const style = document.createElement("style");
    style.id = styleId;

    let css = "";
    const positions = {
      center: "center",
      "top-left": "top left",
      "top-right": "top right",
      "bottom-left": "bottom left",
      "bottom-right": "bottom right",
    };

    const cx = start === "center" ? "50" : start.includes("left") ? "0" : "100";
    const cy = start === "center" ? "50" : start.includes("top") ? "0" : "100";

    if (variant === "circle") {
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { animation: none; }
          ::view-transition-new(root) {
            animation: circle-expand 0.4s ease-out;
            transform-origin: ${positions[start]};
          }
          @keyframes circle-expand {
            from { clip-path: circle(0% at ${cx}% ${cy}%); }
            to { clip-path: circle(150% at ${cx}% ${cy}%); }
          }
        }
      `;
    } else if (variant === "circle-blur") {
      css = `
        @supports (view-transition-name: root) {
          ::view-transition-old(root) { animation: none; }
          ::view-transition-new(root) {
            animation: circle-blur-expand 0.5s ease-out;
            transform-origin: ${positions[start]};
            filter: blur(0);
          }
          @keyframes circle-blur-expand {
            from { clip-path: circle(0% at ${cx}% ${cy}%); filter: blur(4px); }
            to { clip-path: circle(150% at ${cx}% ${cy}%); filter: blur(0); }
          }
        }
      `;
    }

    if (css) {
      style.textContent = css;
      document.head.appendChild(style);
      setTimeout(() => {
        const styleEl = document.getElementById(styleId);
        if (styleEl) styleEl.remove();
      }, 3000);
    }
  }, [theme, setTheme, variant, start]);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size={showLabel ? "default" : "icon"}
        className={cn(
          "relative overflow-hidden transition-all",
          showLabel && "gap-2",
          className
        )}
        aria-label="Switch theme"
      >
        <Sun className="h-5 w-5" />
        {showLabel && <span className="text-sm">Light</span>}
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size={showLabel ? "default" : "icon"}
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden transition-all",
        showLabel && "gap-2",
        className
      )}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
      {showLabel && (
        <span className="text-sm">{theme === "light" ? "Light" : "Dark"}</span>
      )}
    </Button>
  );

};
