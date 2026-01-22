import type { ISectionParts } from "../Interfaces/ISection"
import "../styles/components/Section.css"

function SectionParts({data}: ISectionParts) {
    return (
        <section className="parts-grid">
            {data.map((part) => (
                <div className="part-card" key={part.id}>
                    <div className="part-image">
                        <span>{part.category}</span>
                    </div>

                    <div className="part-info">
                        <h3>{part.name}</h3>
                        <p>{part.description}</p>

                        <div className="part-footer">
                            <strong>{part.price}</strong>
                            <button>Detalhes</button>
                        </div>
                    </div>
                </div>
            ))}
        </section>


    )
}

export default SectionParts