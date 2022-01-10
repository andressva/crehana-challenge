import React from 'react';
import { Card, Form, Input, Select } from 'antd';
import { IContinent } from '../../models';

const { Search } = Input;
const { Option } = Select;

interface OwnProps{
    continents: IContinent[],
    currencies: string[],
    handleSearch: (value: string) => void,
    handleChangeFilter: (value: any, values: any) => void,
}

const FilterBar = ({
    continents,
    currencies,
    handleSearch,
    handleChangeFilter,
}: OwnProps) => {
    return (
        <Card className='border-0'>
            <div>
            <Search
                className='w-75 mb-3'
                placeholder="Search by Country name" 
                onSearch={handleSearch}
                enterButton
            />
            <Form
                className='d-flex w-100'
                onValuesChange={handleChangeFilter}
            >
                <Form.Item
                    className='w-50'
                    name= "continents"
                >
                    <Select
                        mode="multiple"
                        placeholder="Filter by Continent"
                        defaultValue={[]}
                    >
                        {continents.map((continent: IContinent) => (
                            <Option key={continent.code} value={continent.code} label={continent.name}>
                                <div className="demo-option-label-item">
                                    {continent.name}
                                </div>
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    className='w-25 mx-2'
                    name= "currencies"
                >
                    <Select
                        mode="multiple"
                        placeholder="Filter by Currency"
                        defaultValue={[]}
                    >
                        {currencies && currencies.map((currency: string) => (
                            <Option key={currency} value={currency} label={currency}>
                                <div className="demo-option-label-item">
                                    {currency}
                                </div>
                            </Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form>
            </div>
        </Card>
    )
}

export default FilterBar
