import { useState } from "react";
import { Button } from "./Button";
import "./NavBar.css";

interface Props {
  type: string;
  items?: string[];
  onSelectItem: (item: string) => void;
}

export const NavBar = ({ type, items, onSelectItem }: Props) => {
  const navItems = items || ["Home", "About", "Work", "Resume", "Contact"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <nav>
      {type == "sub" && (
        <Button
          type="button"
          imgSrc="images/back.svg"
          altText="go back home"
          onClick={() => {}}
        />
      )}
      <ul>
        {navItems.map((item, index) => (
          <li
            className={selectedIndex === index ? "nav-link active" : "nav-link"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};
