import useCountryDetails from "../../hooks/useCountryDetails"
import { NavLink, useParams } from "react-router"
import { DetailsDataProps } from "../../interfaces/detailsData"
import "./countryDetail.css"
import Borders from "../../components/borders"

const CountryDetail = () => {
    const { countryName } = useParams<{ countryName: string }>()

    if (!countryName) return

    const { detailsData }: { detailsData: DetailsDataProps[] | null } = useCountryDetails(countryName)


    if (!detailsData) return

    const currency = Object.values(detailsData[0]?.currencies)[0]?.name
    const languages = Object.values(detailsData[0]?.languages).join(",")
    const updatedBorders = detailsData?.map((e) => e.borders).flat()

    return (
        <div className="detail-container">
            {detailsData && detailsData.map((elem, index) => (

                <div className="country-container" key={index}>
                    <div className="image-container">
                        <img src={elem.flags.svg} alt={`${elem.name.common} flag`} />
                    </div>
                    <h2>{elem.name.common}</h2>
                    <h3>{elem.name.official}</h3>
                    <div className="population-area">
                        <span>
                            <p>Population</p>
                            <p>{elem.population}</p>
                        </span>
                        <span>
                            <p>Area (km²)</p>
                            <p>{elem.area}</p>
                        </span>
                    </div>
                    <div className="detail">
                        <span>Capital</span>
                        <span>{elem.capital.length > 0 ? elem.capital : "No data"}</span>
                    </div>
                    <div className="detail">
                        <span>Subregion</span>
                        <span>{elem.subregion ? elem.subregion : "No data"}</span>

                    </div>
                    <div className="detail">
                        <span>Language</span>
                        <span> {languages ? languages : "No data"}</span>

                    </div>
                    <div className="detail">
                        <span>Currencies</span>
                        <span>{currency ? currency : "No data"}</span>
                    </div>
                    <div className="detail-last">
                        <span>Continents</span>
                        <span>{elem.continents ? elem.continents : "No data"}</span>
                    </div>
                    <Borders borders={updatedBorders} />
                </div>
            ))}
            <NavLink to={'/'}>
                <button>Back</button>
            </NavLink>
        </div>
    )
}

export default CountryDetail