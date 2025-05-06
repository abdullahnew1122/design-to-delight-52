import React from "react";

interface StatusBarProps {
  time?: string;
  iconSrc?: string;
}

export function StatusBar({ time = "9:41", iconSrc = "https://cdn.builder.io/api/v1/image/assets/6c2136e60c7e472bbe27bd907ace2c88/ff87408b63ecbed762ec45bbdb12ced8de8abb20?placeholderIfAbsent=true" }: StatusBarProps) {
  return (
    <div className="flex w-full items-stretch gap-5 text-base text-black font-normal whitespace-nowrap text-center justify-between pl-[34px]">
      <div className="text-black my-auto">{time}</div>
      <img
        src={iconSrc}
        alt="Status icons"
        className="aspect-[2.26] object-contain w-[122px] shrink-0 max-w-full"
      />
    </div>
  );
}