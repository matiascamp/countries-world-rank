import { Dispatch, SetStateAction } from "react";
import { filtersType } from "../interfaces/filters";

type SearchProps = {
    filters: { sortBy: string; isUnMember: boolean; isIndependant: boolean, query: string }
    setFilters: Dispatch<SetStateAction<filtersType>>
}


const Search = ({ filters, setFilters }: SearchProps) => {

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        setFilters((prev) => ({ ...prev, query: event.target.value }))
    }

    return (
        <>
            <input type="text" placeholder="Search by Name,Region,Subregion" value={filters.query} onChange={handleSearch} />
        </>
    )
}

export default Search