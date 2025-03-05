"use client";

import React from "react";

import { Title } from "./Title";
import { FilterCheckbox } from "./FilterCheckBox";
import { Input } from "../ui";
import { RangeSlider } from "./RangeSlider";
import { CheckboxFiltersGroup } from "./CheckboxFiltersGroup";
interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Filtration" size="sm" className="mb-5 font-bold" />

      <FilterCheckbox text="Could check" value="1" />

      <FilterCheckbox text="New" value="2" />
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from to:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>
        <RangeSlider min={0} max={1000} step={10} />
      </div>
      <CheckboxFiltersGroup
        title="Ingredients"
        name="ingredients"
        defaultItems={[]}
        loading={false}
        className="mt-5"
        limit={5}
        items={[
          {
            text: "Cheese sauce",
            value: "1",
          },
          {
            text: "Pizza",
            value: "2",
          },
          {
            text: "Mozzarella",
            value: "3",
          },
          {
            text: "Pickles",
            value: "4",
          },
          {
            text: "Tomato sauce",
            value: "5",
          },
          {
            text: "Pepperoni",
            value: "6",
          },
          {
            text: "Mushrooms",
            value: "7",
          },
          {
            text: "Olives",
            value: "8",
          },
          {
            text: "Onions",
            value: "9",
          },
          {
            text: "Bell peppers",
            value: "10",
          },
          {
            text: "Basil",
            value: "11",
          },
          {
            text: "Parmesan",
            value: "12",
          },
        ]}
      />
    </div>
  );
};
