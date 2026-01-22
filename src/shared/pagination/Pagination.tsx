import type { PaginationProps } from "./interfaces/IPaginationProps";
import "../pagination/styles/Pagination.css"

function Pagination({ currentPage, totalPages, onNext, onPrev }: PaginationProps) {
    return (
        <div className="pagination">
            <button onClick={onPrev} disabled={currentPage === 1}>
                &lt;
            </button>

            <span>
                {currentPage} / {totalPages}
            </span>

            <button onClick={onNext} disabled={currentPage === totalPages}>
                &gt;
            </button>
        </div>
    );
}

export default Pagination;
