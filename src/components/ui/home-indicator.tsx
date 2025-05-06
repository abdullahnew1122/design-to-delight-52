import React from "react";

export function HomeIndicator() {
  return (
    <div className="w-full">
      <div className="items-center flex min-h-[34px] w-full flex-col overflow-hidden pb-2">
        <div className="backdrop-blur-2xl flex min-h-[5px] w-[154px] max-w-full bg-black rounded-[100px]" />
      </div>
    </div>
  );
}