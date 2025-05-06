import React from "react";
import { ChevronLeft } from "lucide-react";

interface HeaderProps {
  title: string;
  onBackClick?: () => void;
}

export function Header({ title, onBackClick }: HeaderProps) {
  return (
    <div className="flex w-full items-center justify-between px-4 py-2">
      <button
        onClick={onBackClick}
        className="justify-center items-center border border-[#CDCED2] self-stretch flex gap-2 w-[41px] h-[41px] rounded-[999px] border-solid"
        aria-label="Go back"
      >
        <div className="self-stretch flex min-h-5 w-5 my-auto items-center justify-center">
          <ChevronLeft size={20} className="text-gray-700" />
        </div>
      </button>
      <div className="self-stretch min-w-60 text-base text-black font-semibold text-center flex-1 shrink basis-[21px] my-auto">
        {title}
      </div>
      <div className="self-stretch flex w-[41px] shrink-0 h-[41px] gap-2 rounded-[999px]" />
    </div>
  );
}