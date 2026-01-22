import { useState } from "react";
import type { IMainPorps } from "../Interfaces/IMain";
import HeaderParts from "./Hearder";
import SectionParts from "./Section";
import SectionFilter from "./SectionFilter";
import Pagination from "../../shared/pagination/Pagination";

const ITEMS_PER_PAGE = 3;

function MainPart({ filterSection, header, section }: IMainPorps) {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(section.data.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const paginatedData = section.data.slice(startIndex, endIndex);

    function nextPage() {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    }

    function prevPage() {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    }

    return (
        <>
            <HeaderParts
                description={header.description}
                title={header.title}
            />

            <SectionFilter
                options={filterSection.options}
            />

            <SectionParts
                data={paginatedData}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onNext={nextPage}
                onPrev={prevPage}
            />
        </>
    );
}

export default MainPart;
