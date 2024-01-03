import { Link } from "react-router-dom";
import "./Menu.css";

type Props = {
  items: [string, string][];
  activeItem: string | null;
  onClick: () => void;
};

export const Menu = ({ items, activeItem, onClick }: Props) => {
  return (
    <div id="menu-modal">
      <ul>
        {items.map(([item, path]) => (
          <li
            className={`${activeItem === path ? "active " : ""}nav-link`}
            key={item}
            onClick={activeItem === path ? onClick : undefined}
          >
            {path.startsWith("/") ? (
              <Link to={path}>{item}</Link>
            ) : (
              <a href={path}>{item}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
