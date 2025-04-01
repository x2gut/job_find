import { ReactNode } from "react";

const FooterColumn = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className="flex gap-10">
      <div className="w-[200px] flex flex-col justify-start">
        <h3 className="text-white text-xl font-medium mb-4">{title}</h3>
        <nav className="flex flex-col gap-1">{children}</nav>
      </div>
    </div>
  );
};

export default FooterColumn;
