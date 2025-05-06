import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "sm" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "default",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "min-h-14 w-full gap-2 px-4 py-4 rounded-[999px] font-bold text-center",
        {
          "bg-[#F47628] text-white": variant === "primary",
          "bg-white text-[#F47628] border border-[#F47628]": variant === "outline",
          "bg-gray-100 text-gray-800": variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}