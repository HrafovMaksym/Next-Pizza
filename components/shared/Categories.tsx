"use client";

import { useCategoryStore } from "@/app/store/category";
import { cn } from "@/lib/utils";

import React from "react";

// interface Props {
//   items: Category[];
//   className?: string;
// }
export const categories = [
  {
    name: "Pizzas",
  },
  {
    name: "Breakfast",
  },
  {
    name: "Deserts",
  },
  {
    name: "Cocteils",
  },
  {
    name: "Drinks",
  },
];

export const Categories: React.FC = () => {
  const categoryActiveId = useCategoryStore((state) => state.activeId);

  return (
    <div className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl ")}>
      {categories.map((obj, index) => (
        <a
          href={`#${obj.name}`}
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
