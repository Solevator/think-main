import { twMerge } from "tailwind-merge";

interface HeaderProps {
  title: string;
  className?: string;
}

export const Header = ({ title, className }: HeaderProps) => {
  return (
    <header className={twMerge("w-full flex flex-col gap-3", className)}>
      <div className="flex items-center gap-4">
        <span className="text-text text-xl font-bold flex-1">{title}</span>
      </div>
    </header>
  );
};
