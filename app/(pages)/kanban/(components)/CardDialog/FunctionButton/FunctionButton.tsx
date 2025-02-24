import { ButtonHTMLAttributes, ReactNode } from "react";

interface FunctionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  classes?: string;
}

function FunctionButton({ children, classes, ...props }: FunctionButtonProps) {
  return (
    <button
      {...props}
      className={`py-1.5 px-3 flex items-center gap-2 text-custom-cardText bg-custom-fnBtnBg text-sm  rounded-[3px] cursor-pointer ${
        classes || ""
      }`}
    >
      {children}
    </button>
  );
}

export default FunctionButton;
