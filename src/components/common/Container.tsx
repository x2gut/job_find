import { ReactNode } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={`w-full h-full max-w-[1320px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
