export interface ICountry {
    code: string,
    name: string,
    currency: string,
    continent: { name: string },
    languages?: { name: string }[],
    capital?: string 
}

export interface ICountryResponse {
    country: ICountry
}

export interface IContinent {
    code: string,
    name: string
}

export interface ICurrency {
    name: string
}

export interface IFilterCountry {
    continent?: { in: string[] },
    currency?: { in: string[] }
}

export interface ICountries {
    countries: ICountry[],
}

export interface IContinents {
    continents: IContinent[],
}