import { Button } from "./Button";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

type Props = {
  type: "main" | "sub";
  items?: [string, string][];
}

export const NavBar = ({ type, items }: Props) => {
  const navItems = items || [
    ["Home", "/"],
    ["About", "/about"],
    ["Work", "/work"],
    ["Resume", "/resume"],
    ["Contact", "/contact"],
  ];
  const location = useLocation();

  return (
    <nav>
      {type == "sub" && (
        <Button
          type="button"
          imgSrc="/icons/arrow_left.svg"
          altText="go back home"
          goToInternalPage="/"
        />
      )}
      <ul>
        {navItems.map(([item, path]) => (
          <li
            className={
              location.pathname == path ? "nav-link active" : "nav-link"
            }
            key={item}
          >
            {path.startsWith("/") ? (
              <Link to={path}>{item}</Link>
            ) : (
              <a href={path}>{item}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
