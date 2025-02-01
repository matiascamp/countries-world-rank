import { useNeibouhooring } from "../../hooks/useNeibouhooring"
import { NavLink } from "react-router"
import "./borders.css"

type BordersProps = {
        flags:{
            png:string;
            svg:string;
            alt:string
        }
        name:{
            common:string;
            official:string;
        }
}
const Borders = ({ borders }: { borders: string[] }) => {

    if (!Array.isArray(borders) || !borders.length) {
        return <h1 className="title-no-data">No borders available</h1>;
    }

    const { data }:{data:BordersProps[] | null} = useNeibouhooring(borders)


    return (
        <div className="neighbouring-container">
            <div>
                Neighbouring Countries
            </div>
            <div className="neighbouring">
                {data?.map((e,index) => (
                    <span key={index}>
                        <NavLink to={`/${e.name.common}`}>
                        <img  className="borders-flag" src={e.flags.svg} alt={e.name.common}></img>
                        <div>{e.name.common}</div>
                        </NavLink>
                    </span>
                ))}
            </div>
        </div>
    )
}

export default Borders