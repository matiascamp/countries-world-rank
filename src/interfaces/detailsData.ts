export interface DetailsDataProps {
    area: number;
    borders: string[];
    capital: string[];
    continents: string[];
    currencies: {
        INR: {
            name: string;
            symbol: string;
        }

        PKR: {
            name: string;
            symbol: string;
        }

    }
    flags: {
        png: string;
        svg: string;
        atl: string;
    }

    name: {
        common: string;
        nativeName: {
            eng: {
                common: string;
                official: string;
            }
            hin: {
                common: string;
                official: string;
            }
            tam: {
                common: string;
                official: string;
            }
        }
        official: string;
    }
    population: number
    subregion: string
    languages: {
        eng: string
        hin: string
        tam: string
    }
}