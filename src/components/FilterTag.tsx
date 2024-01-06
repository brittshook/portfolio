import { Button } from "./Button";

type Props = {
  children: string;
  active?: boolean;
  onClick: () => void;
};

export const FilterTag = ({ children, active, onClick }: Props) => {
  return (
    <Button
      type="button"
      showText
      onClick={onClick}
      className={{
        padding: "py-1.25 px-2.25",
        borderRadius: "rounded-lg",
        borderWidth: active ? "border-1.5" : "border",
        background: active ? "bg-[#ededed8d]" : "bg-s-primary",
        height: "h-fit",
        other: "font-medium",
      }}
    >
      {children}
    </Button>
  );
};
