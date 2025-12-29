export interface TableColumn<T> {
  key: keyof T | string;
  label: string;
  render?: (row: T) => React.ReactNode;
}

export interface TableProps<T> {
  title: string;
  actionLabel?: string;
  onActionClick?: () => void;

  columns: TableColumn<T>[];
  data: T[];

  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
}