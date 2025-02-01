import { useEffect, useState } from "react"
import { CountriesDataProps } from "../interfaces/countriesData"

const fetchCountries = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all?fields=flags,name,population,area,region,subregion,independent,unMember`)
    return response.json()
}

export const useCountries = () => {

    const [data, setData] = useState<CountriesDataProps[] | null>(null)

    useEffect(() => {
        if(data) return
        (async () => {
            try {
                const response = await fetchCountries()  
                setData(response)
            }
            catch (e) {
                console.error(e);
            }
        })()
    }, [])

    return { data }
}