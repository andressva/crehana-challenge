import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from "@apollo/react-hooks";
import { Descriptions } from 'antd';
import { getCountry } from '../../graphql/queries';
import { ICountryResponse } from '../../models';

const CountryDetail = () => {
    const { code } = useParams();
    const { data } = useQuery<ICountryResponse>(getCountry,{variables: { code }});

    return (
        <div className='pt-5'>
            {data && (
                <Descriptions title={<h2>{data.country.name}</h2>} column={1} bordered>
                    <Descriptions.Item label="Code">{data.country.code}</Descriptions.Item>
                    <Descriptions.Item label="Currency">{data.country.currency}</Descriptions.Item>
                    <Descriptions.Item label="Continent">{data.country.continent.name}</Descriptions.Item>
                    <Descriptions.Item label="Language">{data.country.languages?.map(l => l.name).join(" - ")}</Descriptions.Item>
                    <Descriptions.Item label="Capial" span={2}>{data.country?.capital}</Descriptions.Item>
                </Descriptions>
            )}
        </div>
    )
}

export default CountryDetail
