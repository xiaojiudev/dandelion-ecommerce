'use client'
import React, { useState } from 'react'
import { Select, Space } from 'antd'


const provinceData = ['Zhejiang', 'Jiangsu']

const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang', 'abc'],
}

type CityName = keyof typeof cityData;

export default function ProvinceCoordinate() {

    const [cities, setCities] = useState(cityData[provinceData[0] as CityName])
    const [secondCity, setSecondCity] = useState(cityData[provinceData[0] as CityName][0])

    const handleProvinceChange = (value: CityName) => {
        setCities(cityData[value])
        setSecondCity(cityData[value][0])
    }

    const onSecondCityChange = (value: CityName) => {
        setSecondCity(value)
    }

    return (
        <>
            <Space wrap>
                <Select
                    defaultValue={provinceData[0] as CityName}
                    style={{ width: 120 }}
                    onChange={handleProvinceChange}
                    options={provinceData.map((province) => ({ label: province, value: province }))}
                />
                <Select
                    style={{ width: 120 }}
                    value={secondCity as CityName}
                    onChange={onSecondCityChange}
                    options={cities.map((city) => ({ label: city, value: city }))}
                />
            </Space>
        </>
    )
}
