import "./FilterTag.css";

interface Props {
  children: string;
  active?: boolean;
  onClick: () => void;
}

export const FilterTag = ({ children, active, onClick }: Props) => {
  return (
    <button
      className={active ? "filter active" : "filter"}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
