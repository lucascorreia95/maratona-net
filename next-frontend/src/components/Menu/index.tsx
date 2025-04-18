import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { MenuList } from "@/types/category-types";

export interface MenuProps {
  list: MenuList[];
  onMenuChange: <T extends MenuList>(name: T) => void;
}

export function Menu({ list, onMenuChange }: MenuProps) {
  const [selectedItem, setSelectedItem] = useState(list[0]);

  const handleItemClick = (name: MenuList) => {
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
