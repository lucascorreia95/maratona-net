"use client";
import { Search } from "@/icons/Search";
import { redirect } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export function SearchInput() {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setInputValue("");
      redirect(`/search?query=${inputValue}`);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex justify-center items-center relative">
      <input
        className="w-full max-w-full h-9 border border-zinc-500 py-1 px-2"
        placeholder="Encontre algo legal para assistir!"
        type="text"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={inputValue}
      />
      <div className="absolute top-[8] right-1 -z-0">
        <Search />
      </div>
    </div>
  );
}
