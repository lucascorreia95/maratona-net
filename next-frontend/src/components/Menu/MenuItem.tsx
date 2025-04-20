import { Categories } from "@/types/category-types";

export interface MenuItemProps {
  name: Categories;
  isSelected: boolean;
  onClick: (name: Categories) => void;
}

export function MenuItem({ name, isSelected, onClick }: MenuItemProps) {
  return (
    <li
      className="flex flex-col items-center justify-center gap-1 cursor-pointer"
      onClick={() => onClick(name)}
    >
      <span
        className={`text-xs sm:text-sm md:text-xl text-center ${
          isSelected ? "font-semibold" : "font-normal"
        }`}
      >
        {name}
      </span>
      <div
        className={`w-6 h-1.5 rounded-2xl ${
          isSelected ? "bg-blue-800" : "bg-transparent"
        }`}
      ></div>
    </li>
  );
}
