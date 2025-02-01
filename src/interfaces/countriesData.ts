export interface CountriesDataProps {
    area: number;
    flag: {
        svg:string;
        png:string;
    }
    independent: boolean;
    name: Name;
    population: number;
    region: string;
    subregion: string;
    unMember: boolean;
}

type Name = {
    common: string;
    official: string;
    nativeName: NativeName;
}

type NativeName = {
    eng: Eng;
}

type Eng = {
    common: string;
    official: string;
}