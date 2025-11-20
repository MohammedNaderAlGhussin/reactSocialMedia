export interface InputProps {
  id: string;
  labelText: string | React.ReactElement;
  type: string;
  name: string;
  value?: string;
  placeholder?: string;
  icon?: React.ElementType;
}
