"use client";
import { Search } from "@/icons/Search";
import { redirect } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";

export function SearchInput() {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && inputValue) {
        setInputValue("");
        redirect(`/search?query=${inputValue}`);
      }
    },
    [inputValue]
  );

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);

  const handleOnClick = useCallback(() => {
    if (inputValue) {
      setInputValue("");
      redirect(`/search?query=${inputValue}`);
    }
  }, [inputValue]);

  return (
    <div className="flex justify-center items-center relative">
      <input
        className="w-full max-w-full h-9 border border-zinc-500 py-1 px-2"
        placeholder="Encontre algo para assistir!"
        type="text"
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={inputValue}
      />
      <button
        className="absolute top-[5] right-1 -z-0 cursor-pointer"
        onClick={handleOnClick}
      >
        <Search />
      </button>
    </div>
  );
}
