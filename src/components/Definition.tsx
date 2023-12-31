import "./Definition.css";

interface Props {
  emoji?: string;
  title: string;
  text: string;
}
export const Definition = ({ emoji, title, text }: Props) => {
  return (
    <div className="definition">
      <div>
        {emoji && <span className="large-text">{emoji}</span>}
        <p className="large-text">{title}</p>
      </div>
      <p className="vr">{text}</p>
    </div>
  );
};
