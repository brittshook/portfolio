import { FilterTag } from "./FilterTag";
import { useState } from "react";

type Props = {
  filterCategories: string[];
  onSelectCategory: (category: string | null) => void;
  className?: string;
};

export const Filter = ({
  filterCategories,
  onSelectCategory,
  className,
}: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div
      className={`flex items-center gap-5 min-h-10 max-sm:flex-wrap max-sm:justify-start max-sm:gap-3 ${
        className || ""
      }`}
    >
      <span className="text-base max-sm:text-lg">Filter by:</span>
      <div className="flex items-center gap-3">
        {filterCategories.map((category, index) => (
          <FilterTag
            key={index}
            active={selectedIndex == index}
            onClick={() => {
              if (selectedIndex === index) {
                setSelectedIndex(-1);
                onSelectCategory(null);
              } else {
                setSelectedIndex(index);
                onSelectCategory(category);
              }
            }}
          >
            {category}
          </FilterTag>
        ))}
      </div>
    </div>
  );
};
