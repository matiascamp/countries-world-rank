import { useEffect, useMemo } from "react";
import { contextProfile } from "../context/useContext";

export const useFilterAndSort = () => {
    const { countriesData, filters, setFilters } = contextProfile();

    const sortedCountries = useMemo(() => {

        if (!countriesData) return []

        const acumCountries = [...countriesData]

        switch (filters.sortBy) {
            case 'population':
                return acumCountries.sort(((a, b) => a.population - b.population))
            case 'area':
                return acumCountries.sort((a, b) => a.area - b.area)
            case 'alphabetical':
                return acumCountries.sort((a, b) => a.name.common.localeCompare(b.name.common))
            default:
                return acumCountries
        }

    }, [countriesData, filters.sortBy]);

    const countriesFiltered = useMemo(() => {

        if (!countriesData) return []

        const statusFiltered = sortedCountries?.filter((country) => {

            const isIndependent = !filters.isIndependant || country.independent === filters.isIndependant
            const isMember = !filters.isUnMember || country.unMember === filters.isUnMember
            const matchedRegions = filters.region.length === 0 || filters.region.includes(country.region)
            
            return isIndependent && isMember && matchedRegions
        })

        if (!filters.query) return statusFiltered

        const searchQuery = filters.query

        return statusFiltered?.filter((item) => {

            const lowerQuery = searchQuery.toLocaleLowerCase();

            return (
                item.name.common.toLocaleLowerCase().includes(lowerQuery) ||
                item.region.toLocaleLowerCase().includes(lowerQuery) ||
                item.subregion.toLocaleLowerCase().includes(lowerQuery)
            );
        })
    }, [sortedCountries,
        filters.isIndependant,
        filters.isUnMember,
        filters.region,
        filters.query
    ]);


    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            countriesCount: countriesFiltered?.length || 0
        }))
    }, [countriesFiltered, sortedCountries])



    return { countriesFiltered };
};
