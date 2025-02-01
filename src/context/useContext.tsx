import React, { createContext, useContext, useState } from "react";
import { CountriesDataProps } from "../interfaces/countriesData";
import { filtersType } from "../interfaces/filters";

interface ProfileContextType {
    countriesData: CountriesDataProps[] | null
    setCountriesData: React.Dispatch<React.SetStateAction<CountriesDataProps[] | null>>
    filters: filtersType
    setFilters: React.Dispatch<React.SetStateAction<filtersType>>
}


const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [countriesData, setCountriesData] = useState<CountriesDataProps[] | null>(null);
    const [filters, setFilters] = useState<filtersType>({
        query: "",
        countriesCount: 0,
        sortBy: "population",
        isUnMember: false,
        isIndependant: false,
        region: [],
    })


    return (
        <ProfileContext.Provider value={{ countriesData, setCountriesData, filters, setFilters }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const contextProfile = () => {
    const context = useContext(ProfileContext);
    if (!context) {
        throw new Error('contextProfile must be used within a ProfileProvider');
    }
    return context;
};