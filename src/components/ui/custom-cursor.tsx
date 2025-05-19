
import React, { useState, useEffect } from "react";

interface CustomCursorProps {
  children: React.ReactNode;
  cursorSize?: number;
  cursorColor?: string;
  hoverTextColor?: string;
  defaultTextColor?: string;
}

export const CustomCursor = ({
  children,
  cursorSize = 30,
  cursorColor = "rgba(204, 0, 0, 0.4)", // TeknetRed with opacity
  hoverTextColor = "#cc0000", // TeknetRed
  defaultTextColor = "rgba(255, 255, 255, 0.7)", // Default text color
}: CustomCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detect touch devices on component mount
  useEffect(() => {
    const isTouchEnabled = 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0;
    
    setIsTouchDevice(isTouchEnabled);
  }, []);

  // Update cursor position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Handle mouse enter/leave
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  // Don't show custom cursor on touch devices
  if (isTouchDevice) {
    return (
      <div style={{ color: defaultTextColor, transition: "color 0.3s ease" }}>
        {children}
      </div>
    );
  }

  return (
    <div
      className="relative"
      style={{ cursor: isHovering ? "none" : "auto" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovering && (
        <div
          className="pointer-events-none absolute rounded-full transition-transform duration-100 ease-out"
          style={{
            left: position.x,
            top: position.y,
            width: `${cursorSize}px`,
            height: `${cursorSize}px`,
            backgroundColor: cursorColor,
            transform: "translate(-50%, -50%)",
            mixBlendMode: "difference",
            zIndex: 50,
          }}
        />
      )}
      <div
        style={{
          color: isHovering ? hoverTextColor : defaultTextColor,
          transition: "color 0.3s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
};
