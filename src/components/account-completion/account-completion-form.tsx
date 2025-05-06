import React, { useState } from "react";
import { StatusBar } from "@/components/ui/status-bar";
import { Header } from "@/components/ui/header";
import { FormInput } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import { HomeIndicator } from "@/components/ui/home-indicator";

export function AccountCompletionForm() {
  const [formData, setFormData] = useState({
    fullName: "Mohammed Khaled",
    email: "aaaaaaaaa@a.com",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // You could add API calls or navigation here
  };

  const handleBackClick = () => {
    // Handle back button click
    console.log("Back button clicked");
    // You could add navigation here
  };

  return (
    <div className="bg-white max-w-[480px] w-full overflow-hidden mx-auto rounded-3xl">
      <div className="w-full">
        <StatusBar />
        <Header title="Complete account details" onBackClick={handleBackClick} />
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white flex w-full flex-col overflow-hidden items-stretch flex-1 px-4 py-6">
        <div className="flex w-full flex-col items-stretch justify-center">
          <h1 className="text-black text-xl font-semibold">Hello</h1>
          <p className="text-[#6A6C78] text-sm font-normal mt-4">
            Please enter this information to complete account creation
          </p>
        </div>
        
        <img
          src="https://cdn.builder.io/api/v1/image/assets/6c2136e60c7e472bbe27bd907ace2c88/4d0a0907fd993b987325cba4507e713141fb0f88?placeholderIfAbsent=true"
          alt="Account avatar"
          className="aspect-[1] object-contain w-[88px] self-center mt-10"
        />
        
        <div className="w-full font-normal mt-10">
          <FormInput
            label="Full name"
            value={formData.fullName}
            onChange={handleInputChange}
            name="fullName"
          />
          
          <div className="w-full mt-4">
            <FormInput
              label="Email address"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              name="email"
            />
          </div>
        </div>
        
        <div className="w-full mt-auto pt-6">
          <Button type="submit">Done</Button>
        </div>
      </form>
      
      <HomeIndicator />
    </div>
  );
}