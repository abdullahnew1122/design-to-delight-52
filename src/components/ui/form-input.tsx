
import React from "react";

interface FormInputProps {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  readOnly?: boolean;
  name?: string; // Added name property to the interface
}

export function FormInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  readOnly = false,
  name, // Added name to props
}: FormInputProps) {
  return (
    <div className="flex w-full flex-col items-stretch justify-center">
      <div className="items-center border border-[#E6E7E9] bg-white flex min-h-14 w-full gap-3 overflow-hidden rounded-[20px] border-solid">
        <div className="self-stretch flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] my-auto px-4 py-2">
          <label className="text-[#9B9DA5] self-stretch flex-1 shrink basis-[0%] text-xs">
            {label}
          </label>
          <div className="flex w-full items-center gap-2 text-base text-[#060A1E] mt-1">
            <input
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              readOnly={readOnly}
              name={name} // Added name attribute to input
              className="text-[#060A1E] self-stretch w-full my-auto bg-transparent outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
