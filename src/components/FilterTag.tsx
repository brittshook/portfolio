import "./FilterTag.css";

type Props = {
  children: string;
  active?: boolean;
  onClick: () => void;
};

export const FilterTag = ({ children, active, onClick }: Props) => {
  return (
    <button
      className={`filter ${active && "active"}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
