import { Link } from "react-router-dom";

type Props = {
  items: [string, string][];
  activeItem: string | null;
  onClick: () => void;
};

export const Menu = ({ items, activeItem, onClick }: Props) => {
  return (
    <div
      id="menu-modal"
      className="w-full h-full fixed top-0 left-0 bg-s-primary flex justify-center items-center z-10"
    >
      <ul className="list-none text-center">
        {items.map(([item, path], index) => (
          <li
            className={index != items.length - 1 ? "mb-8" : ""}
            key={item}
            onClick={activeItem === path ? onClick : undefined}
          >
            {path.startsWith("/") ? (
              <Link
                className={`capitalize ${
                  activeItem === path
                    ? "text-t-primary hover:text-t-primary font-bold cursor-default"
                    : "text-t-secondary-light hover:text-t-secondary-dark cursor-pointer"
                } hover:no-underline text-2-xl`}
                to={path}
              >
                {item}
              </Link>
            ) : (
              <a href={path}>{item}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
