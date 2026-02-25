"use client";

import { ReactNode } from "react";

interface ScrollSnapContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollSnapContainer({ children, className = "" }: ScrollSnapContainerProps) {
  return (
    <div
      className={`bg-gray-50 dark:bg-gray-800 ${className}`}
      style={{
        scrollSnapType: "y proximity",
      }}
    >
      {children}
    </div>
  );
}
