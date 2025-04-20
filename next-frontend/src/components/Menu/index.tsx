import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { Categories } from "@/types/category-types";

export interface MenuProps {
  list: Categories[];
  onMenuChange: <T extends Categories>(name: T) => void;
}

export function Menu({ list, onMenuChange }: MenuProps) {
  const [selectedItem, setSelectedItem] = useState(list[0]);

  const handleItemClick = (name: Categories) => {
    setSelectedItem(name);
    onMenuChange(name);
  };

  return (
    <nav className="p-4">
      <ul className="flex gap-6 items-center justify-center">
        {list.map((name) => {
          return (
            <MenuItem
              key={name}
              name={name}
              onClick={handleItemClick}
              isSelected={selectedItem === name}
            />
          );
        })}
      </ul>
    </nav>
  );
}
