 import { useEffect, useState } from "react"

const fetchNeibouhooring = async (borders:string[]) => {
    const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borders}&fields=flags,name`)
    return response.json()
}

export const useNeibouhooring = (borders:string[]) => {

    const [data, setData] = useState<any[] | null>(null)
    useEffect(() => {

        (async () => {

            try {
                const response = await fetchNeibouhooring(borders)             
                setData(response)
            }
            catch (e:any) {
                console.error(e.data);
            }
        })()
    }, [])

    return { data }
}