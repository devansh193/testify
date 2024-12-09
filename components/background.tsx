import React from "react";
import { useNoiseEffect } from "../hooks/useNoiseEffect";

export const Background: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const noiseRef = useNoiseEffect();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-[#f5f5f0]">
        <canvas
          ref={noiseRef}
          className="absolute inset-0 w-full h-full opacity-[0.15] mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#e6e6da]/30 to-[#d4d4c7]/40" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};
