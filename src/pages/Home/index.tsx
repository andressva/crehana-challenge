import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";
import { Card, Table } from 'antd';
import { getContinents, getCountries } from '../../graphql/queries';
import { ICountry, IContinent, IFilterCountry, ICountries, IContinents } from '../../models';
import FilterBar from '../../components/FilterBar';

const Home = () => {
    const { data, refetch } = useQuery<ICountries>(getCountries);
    const {  data: dataContinents } = useQuery<IContinents>(getContinents);
    
    const [ countries, setCountries ] = useState<ICountry[]>([]);
    const [ currencies, setCurrencies ] = useState<string[]>();
    const [ continents, setContinets ] = useState<IContinent[]>([]);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string, data: ICountry) => <Link to={`/country/${data.code}`}>{text}</Link>,
        },
        {
            title: 'Continent',
            dataIndex: ["continent", "name"],
            key: 'continent.name',
        },
        {
            title: 'Currency',
            dataIndex: 'currency',
            key: 'currency',
        },
    ];

    useEffect(() => {
        if(!data) return;
        if(!currencies){
            const tempCurrencies: string[] = data.countries.map((country: ICountry) => country.currency );
            const cleanCurrencies = tempCurrencies.filter((item, index) => tempCurrencies.indexOf(item) === index && item);
            setCurrencies(cleanCurrencies);
        }
        setCountries(data.countries);
    }, [data])

    useEffect(() => {
        if(!dataContinents) return;
        setContinets(dataContinents.continents);
    }, [dataContinents])

    const handleSearch = (keyword: string) => {
        if(!data) return;
        if(!keyword){
            setCountries(data.countries);
            return;
        }
        const temp: ICountry[] = data.countries.filter(country => {
            return country.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()); 
        });

        setCountries(temp);
    }

    const hanldeChangeFilter = (value: any, formData: any) => {
        const tempFilter: IFilterCountry = {};

        const continent = formData.continents && formData.continents.length > 0 ? formData.continents : null;
        const currency = formData.currencies && formData.currencies.length > 0 ? formData.currencies : null;
        
        if(continent) tempFilter.continent = { in: continent };
        if(currency) tempFilter.currency = { in: currency };
        console.log(tempFilter)
        refetch({filter: tempFilter});
    }

    return (
        <div className='py-2 pb-5' >
        <FilterBar 
            continents={continents}
            currencies={currencies || []}
            handleChangeFilter={hanldeChangeFilter}
            handleSearch={handleSearch}
        />
        <Card>
            <Table dataSource={countries} columns={columns} />
        </Card>
        </div>
    )
}

export default Home
