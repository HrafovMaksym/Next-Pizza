"use client";

import { cn } from "@/lib/utils";

import React from "react";

// interface Props {
//   items: Category[];
//   className?: string;
// }
export const categories = [
  {
    name: "Пиццы",
  },
  {
    name: "Завтрак",
  },
  {
    name: "Закуски",
  },
  {
    name: "Коктейли",
  },
  {
    name: "Напитки",
  },
];
const categoryActiveId = 0;
export const Categories: React.FC = () => {
  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl ")}>
      {categories.map((obj, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            categoryActiveId === index &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          key={index}
        >
          <button>{obj.name}</button>
        </a>
      ))}
    </div>
  );
};
