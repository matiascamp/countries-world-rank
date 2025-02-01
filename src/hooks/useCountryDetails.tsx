import {  useEffect, useState } from "react"
import { DetailsDataProps } from "../interfaces/detailsData"



const fetchCountryDetails = async (name:string) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true&fields=name,population,area,capital,subregion,languages,currencies,continents,borders,flags`)
    return response.json()
}

const useCountryDetails = (name: string) => {
    const [detailsData, setDetailsData] = useState<DetailsDataProps | null>(null)

    useEffect(() => {
        if (!name) return;
        (async () => {
            try {
                const responseFetch = await fetchCountryDetails(name)
                setDetailsData(responseFetch)
            }
            catch (e) {
                console.error(e);
            }
        })()
    }, [name])
    
    return { detailsData }
}

export default useCountryDetails