'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Select, Space } from 'antd'
import { getProvincesAPI } from '@/lib/getProvince'

const provinceData: string[] = []
const districtData: { [province: string]: string[] } = {}
const wardData = {}


export default function ProvinceCoordinate() {

    const [provinces, setProvinces] = useState<Provinces[]>([])
    const [province, setProvince] = useState<string[]>()
    const [district, setDistrict] = useState<string>()
    const [ward, setWard] = useState()

    useEffect(() => {
        const getProvinceList = async () => {
            const res = await getProvincesAPI()
            res.forEach((province) => {
                provinceData.push(province.name)
                districtData[province.name] = province.districts.map((district) => district.name)

                districtData[province.name].forEach((districtName) => {
                    const matchingDistrict = province.districts.find(d => d.name === districtName);
                    wardData[districtName] = matchingDistrict.wards.map(ward => ward.name);
                })
            })

            setProvinces(res)
            setProvince(districtData[provinceData[0]])
            setDistrict(districtData[provinceData[0]][0])
            setWard(wardData[districtData[provinceData[0]][0]])

        }
        getProvinceList()

    }, [])

    // console.log("Check province: ", province);
    // console.log("Check district: ", district);
    // console.log("Check ward:", ward);




    const handleProvinceChange = (value: string) => {
        console.log(value);

        setProvince(districtData[value])
        setDistrict(districtData[value][0])
        setWard(wardData[districtData[value][0]])
    }

    const handleDistrictChange = (value: string) => {
        console.log(value)
        setDistrict(value)
        // console.log(province, district, ward);
        // setWard(wardData)
    }

    // console.log(wardData['Quận Ninh Kiều']);


    const handleWardChange = (value: string) => {
        console.log(value);
        // setWard(value)
        // setWard()
    }
    console.log(ward);
    
    // console.log("Check province: ", province);
    // console.log("Check district: ", district);


    return (
        <>
            {province && district ? (
                <Space wrap>
                    <Select
                        defaultValue={provinceData[0]}
                        style={{ width: 140 }}
                        onChange={handleProvinceChange}
                        options={provinceData?.map((province) => ({ label: province, value: province }))}
                    />
                    <Select
                        value={district}
                        style={{ width: 140 }}
                        onChange={handleDistrictChange}
                        options={province?.map((province) => ({ label: province, value: province }))}
                    />

                    <Select
                        value={ward[0]}
                        style={{ width: 150 }}
                        onChange={handleWardChange}
                        options={ward?.map((ward) => ({ label: ward, value: ward }))}
                    />

                </Space >
            ) : (
                <div>
                    loading
                </div>
            )
            }


        </>
    )
}
