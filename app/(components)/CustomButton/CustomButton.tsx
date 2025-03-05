import { ButtonHTMLAttributes, ReactNode } from "react";
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}
function CustomButton({
  onClick,
  className = "",
  children,
  ...props
}: CustomButtonProps) {
  return (
    <button {...props} className={`btn ${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default CustomButton;
