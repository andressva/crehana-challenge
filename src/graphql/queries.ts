import gql from 'graphql-tag';

export const getCountries = gql`
    query Countries($filter: CountryFilterInput){   
        countries(filter: $filter){
            code,
            name, 
            currency,
            continent{
                name
            },
        }
    }
`
export const getContinents = gql`
    query{
        continents{
            code,
            name
        }
    }
`
export const getCountry = gql`
    query Country($code: ID!){
        country(code: $code){
            code,
            name,
            currency,
            continent{ name },
            languages{ name },
            capital,
            emojiU,
        }
    }
`