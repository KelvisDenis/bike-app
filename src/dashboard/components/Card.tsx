import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "../styles/components/DashboardCardChart.css";
import type { DashboardCardChartProps } from "../interfaces/ICard";

ChartJS.register(ArcElement, Tooltip, Legend);



export default function DashboardCardChart({
  title,
  description,
  data,
}: DashboardCardChartProps) {

  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        data: data.map(item => item.value),
        backgroundColor: data.map(item => item.color),
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>

      <div className="card-content">
        <Doughnut data={chartData} />
      </div>

      <ul className="card-legend">
        {data.map((item, index) => (
          <li key={index}>
            <span
              className="legend-color"
              style={{ backgroundColor: item.color }}
            />
            <span className="legend-text">
              {item.label}: <strong>{item.value}</strong>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
