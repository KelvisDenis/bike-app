export interface FormProps {
  title?: string;
  onSubmit: (e: React.FormEvent) => void;
  handleCancel: (e: React.FormEvent) => void;
  submitText?: string;
  children: React.ReactNode;
}