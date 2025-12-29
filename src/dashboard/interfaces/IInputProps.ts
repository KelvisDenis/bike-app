export interface InputProps {
  label?: string;
  name: string;
  value?: string | number;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}