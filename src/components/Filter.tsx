import { FilterTag } from "./FilterTag";
import "./Filter.css";
import { useState } from "react";

interface Props {
  filterCategories: string[];
  onSelectCategory: (category: string) => void;
}

export const Filter = ({ filterCategories, onSelectCategory }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className="filter-container">
      <span>Filter by:</span>
      <div className="btn-container">
        {filterCategories.map((category, index) => (
          <FilterTag
            key={index}
            active={selectedIndex == index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectCategory(category);
            }}
          >
            {category}
          </FilterTag>
        ))}
      </div>
    </div>
  );
};
