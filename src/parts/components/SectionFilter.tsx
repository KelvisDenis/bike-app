import type { IFilterSection } from "../Interfaces/IFilterSection";
import "../styles/components/SectionFilter.css"


function SectionFilter({ options }: IFilterSection) {
    return (
        <section className="parts-filters">
            <button className="filter active">Todas</button>
            {options.map((txt, index) => (
                <button className="filter" key={index}>{txt.textButton}</button>
            ))}
        </section>
    )
}

export default SectionFilter;