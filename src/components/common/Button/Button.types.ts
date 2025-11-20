export interface ButtonProps {
  content?: string;
  children?: React.ReactNode;
  variant?: "linear-primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
}
