import { useState } from "react";
import { MenuItem } from "./MenuItem";

export interface MenuProps {
  list: {
    name: string;
  }[];
  onMenuChange: (name: string) => void;
}

export function Menu({ list, onMenuChange }: MenuProps) {
  const [selectedItem, setSelectedItem] = useState<string>(list[0].name);

  const handleItemClick = (name: string) => {
    setSelectedItem(name);
    onMenuChange(name);
  };

  return (
    <nav className="p-4">
      <ul className="flex gap-6 items-center justify-center">
        {list.map((item) => {
          return (
            <MenuItem
              key={item.name}
              name={item.name}
              onClick={handleItemClick}
              isSelected={selectedItem === item.name}
            />
          );
        })}
      </ul>
    </nav>
  );
}
