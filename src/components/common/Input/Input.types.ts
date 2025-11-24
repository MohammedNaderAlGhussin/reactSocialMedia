export interface InputProps {
  id: string;
  labelText: string | React.ReactElement;
  type: string;
  name: string;
  value?: string;
  checked?: boolean;
  placeholder?: string;
  icon?: React.ElementType;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
}
