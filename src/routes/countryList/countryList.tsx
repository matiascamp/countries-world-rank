import { useEffect, useState } from "react";
import "./countryList.css"
import Pagination from "../../components/pagination/pagination";
import FilterRegions from "../../components/filterRegions/filterRegions";
import { contextProfile } from "../../context/useContext";
import { useFilterAndSort } from "../../hooks/useFilterAndSort";
import Search from "../../components/search";
import { NavLink } from "react-router";
import SearchIcon from '../../assets/Search.svg'


const CountriesList = () => {
    const { countriesFiltered } = useFilterAndSort()
    const [totalPages, setTotalPages] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { filters, setFilters } = contextProfile()

    const itemsPerPage = 12;
    const startIndex = (currentPage - 1) * itemsPerPage;

    useEffect(() => {
        setCurrentPage(1)
        setTotalPages(0)
    },[])

    useEffect(() => {

        if (countriesFiltered) {
            setTotalPages(Math.ceil(countriesFiltered.length / itemsPerPage));
        }
    }, [itemsPerPage, countriesFiltered]);


    if ((!Array.isArray(countriesFiltered) || countriesFiltered === null)) {
        return <div>Loading...</div>;
    }

    

    return (
        <div className="main-container">
            <div className="table-container">
                <div className="quantity-and-search">
                    <span>Found {filters.countriesCount} countries</span>
                    <div className="searchBar">
                        <img src={SearchIcon} alt="" />
                        <Search filters={filters} setFilters={setFilters} />
                    </div>
                </div>
                <div className="table-filter-body">
                    <FilterRegions filters={filters} setFilters={setFilters} />
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Flag</th>
                                <th scope="col">Name</th>
                                <th scope="col">Population</th>
                                <th scope="col">Area(km<sup>2</sup>)</th>
                                <th scope="col">Region</th>
                            </tr>
                            <tr>
                                <th  colSpan={5} className="separator"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={5} ></td>
                            </tr>
                            {countriesFiltered ? countriesFiltered.slice(startIndex, startIndex + itemsPerPage).map((country: any) => (
                                <tr key={country.name.common}>
                                    <td >
                                        <NavLink to={`${country.name.common}`}>
                                            <img className="flag-list" src={country.flags.svg} alt="" />
                                        </NavLink>
                                    </td>

                                    <td>
                                        <NavLink to={`${country.name.common}`}>
                                            {country.name.common}
                                        </NavLink>
                                    </td>
                                    <td>{country.population} </td>
                                    <td>{country.area} </td>
                                    <td>{country.region} </td>
                                </tr>
                            )) :
                                <tr>No match info</tr>
                            }
                        </tbody>
                    </table>
                </div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
            </div>
        </div>
    )
}

export default CountriesList