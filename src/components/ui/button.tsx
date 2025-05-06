
import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Define button variants using class-variance-authority
export const buttonVariants = cva(
  "min-h-14 w-full gap-2 px-4 py-4 rounded-[999px] font-bold text-center",
  {
    variants: {
      variant: {
        primary: "bg-[#F47628] text-white",
        secondary: "bg-gray-100 text-gray-800",
        outline: "bg-white text-[#F47628] border border-[#F47628]",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-800",
      },
      size: {
        default: "",
        sm: "min-h-9 px-3 py-2 text-sm",
        lg: "min-h-16 px-6 py-4 text-lg",
        icon: "h-9 w-9 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

// Export the ButtonProps interface so it can be used by other components
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
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
        buttonVariants({ variant, size }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
