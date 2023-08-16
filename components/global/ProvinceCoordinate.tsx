'use client'
import React, { useEffect, useState } from 'react'
import { Select, Space } from 'antd'
import { getProvincesAPI } from '@/lib/getProvince'


export default function ProvinceCoordinate() {

    const [provinces, setProvinces] = useState([])
    const [province, setProvince] = useState()
    const [district, setDistrict] = useState()
    const [ward, setWard] = useState()


    useEffect(() => {
        const getProvinceList = async () => {
            const res = await getProvincesAPI()
            setProvinces(res)
        }
        getProvinceList()
    }, [])


    const handleProvinceChange = (value) => {
        setProvince(value)
        setDistrict(provinces.find((item) => item.code === value))
    }

    const handleDistrictChange = (value) => {
        console.log(value);
        setWard(district?.districts?.find((item) => item.code === value))
    }

    const handleWardChange = (value) => {

    }

    return (
        <>
            <div>
                <Select
                    defaultValue={'Select province'}
                    style={{ width: 180 }}
                    onChange={handleProvinceChange}
                    options={provinces.map((province) => ({ label: province.name, value: province.code }))}
                />
                <Select
                    defaultValue={'Select district'}
                    style={{ width: 180 }}
                    onChange={handleDistrictChange}
                    options={district?.districts?.map((district) => ({ label: district.name, value: district.code }))}
                    disabled={!province}
                />
                <Select
                    defaultValue={'Select ward'}
                    style={{ width: 180 }}
                    onChange={handleWardChange}
                    options={ward?.wards?.map((ward) => ({ label: ward.name, value: ward.code }))}
                    disabled={!district}
                />
            </div>
        </>
    )
}
