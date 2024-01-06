type Props = {
  emoji?: string;
  title: string;
  text: string;
};
export const Definition = ({ emoji, title, text }: Props) => {
  return (
    <div className="bg-s-secondary p-8 rounded-xs">
      <div className="flex gap-5 mb-5 items-center">
        {emoji && <span className="text-lg">{emoji}</span>}
        <p className="text-lg max-sm:text-xl">{title}</p>
      </div>
      <p className="text-base max-sm:text-lg pl-6 py-1 border-l-2 border-solid border-t-secondary-light">
        {text}
      </p>
    </div>
  );
};
