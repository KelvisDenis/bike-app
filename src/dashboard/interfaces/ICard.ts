interface ChartItem {
  label: string;
  value: number;
  color: string;
}

export interface ConfigCardProps {
  title: string;
  description: string;
  buttonLabel?: string;
  onAction: () => void;
}

export interface DashboardCardChartProps {
  title: string;
  description?: string;
  data: ChartItem[];
}