
import "./pagination.css"
import Arrow from "../../assets/arrow.svg"
import ArrowF from "../../assets/arrow-f.svg"

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({ currentPage, setCurrentPage, totalPages }: PaginationProps) => {


    // Handle page change
    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };


    // Determine the range of buttons to display
    const getPaginationButtons = () => {
        const buttons = [];
        const startPage = Math.max(1, currentPage - 5);
        const endPage = Math.min(totalPages, startPage + 5);


        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    disabled={currentPage === i}
                >
                    {i}
                </button>
            );
        }

        return buttons;
    };

    return (
        <div className="pagination-container">
            <div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <img src={Arrow} alt="" />
                </button>
                {getPaginationButtons()}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <img src={ArrowF} alt="" />
                </button>
            </div>
        </div>

    )
}

export default Pagination