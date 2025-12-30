import type { ConfigCardProps } from "../interfaces/ICard";
import "../styles/components/ConfigCard.css";



export default function ConfigCard({
  title,
  description,
  buttonLabel = "Configurar",
  onAction,
}: ConfigCardProps) {
  return (
    <div className="config-card">
      <div className="config-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <button className="config-card-button" onClick={onAction}>
        {buttonLabel}
      </button>
    </div>
  );
}
