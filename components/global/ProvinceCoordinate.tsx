'use client'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Select, Space } from 'antd'
import { getProvincesAPI } from '@/lib/getProvince'

const provinceData: string[] = []
const districtData: { [province: string]: string[] } = {}
const wardData: { [province: string]: string[] } = {}


export default function ProvinceCoordinate() {

    const [provinces, setProvinces] = useState<Provinces[]>([])
    const [firstProvince, setFirstProvince] = useState<string>()
    const [province, setProvince] = useState<string[]>()
    const [district, setDistrict] = useState<string>()
    const [wards, setWards] = useState<string[]>([])
    const [ward, setWard] = useState<string>()


    useEffect(() => {
        const getProvinceList = async () => {
            const res = await getProvincesAPI()
            res.forEach((province) => {
                provinceData.push(province.name)
                districtData[province.name] = province.districts.map((district) => district.name)

                districtData[province.name].forEach((districtName) => {
                    const matchingDistrict = province.districts.find(d => d.name === districtName);
                    if (matchingDistrict) {
                        wardData[districtName] = matchingDistrict.wards.map((ward) => (ward.name));
                    }
                })
            })

            setProvinces(res)
            setProvince(districtData[provinceData[0]])
            setFirstProvince(provinceData[0])
            setDistrict(districtData[provinceData[0]][0])
            setWards(wardData[districtData[provinceData[0]][0]])
            setWard(wardData[districtData[provinceData[0]][0]][0])

        }
        getProvinceList()

    }, [])

    const handleProvinceChange = (value: string) => {
        // value = Thành phố Hà Nội        
        setFirstProvince(value)
        setProvince(districtData[value])
        setDistrict(districtData[value][0])
        setWards(wardData[districtData[value][0]])
        setWard(wardData[districtData[value][0]][0])
    }


    const handleDistrictChange = (value: string) => {
        // value = Quận Ba Đình
        setDistrict(value)
        setWards(wardData[value])
        setWard(wardData[value][0])
    }

    const handleWardChange = (value: string) => {
        setWard(value)
    }
    // console.log("check province", provinces);
    // console.log("check provinceData", provinceData);
    // console.log("check districtData", districtData);
    // console.log("check wardData", wardData);
    // console.log("check wardData", wardData[district]);
    // console.log("check province", province);
    // // console.log("check district", district);
    // console.log("check ward", ward);
    // console.log("check wards", wards);
    console.log(firstProvince);


    return (
        <>
            {provinces && provinceData && districtData && wardData && firstProvince ? (
                <Space wrap>
                    <Select
                        value={firstProvince}
                        style={{ width: 180 }}
                        onChange={handleProvinceChange}
                        options={provinceData?.map((province) => ({ label: province, value: province }))}
                    />
                    <Select
                        value={district}
                        style={{ width: 180 }}
                        onChange={handleDistrictChange}
                        options={province?.map((province) => ({ label: province, value: province }))}
                    />

                    <Select
                        value={ward}
                        style={{ width: 180 }}
                        onChange={handleWardChange}
                        options={wards?.map((ward) => ({ label: ward, value: ward }))}
                    />
                </Space >
            ) : (
                <>
                    <Select loading style={{ width: 180 }} disabled />
                    <Select loading style={{ width: 180 }} disabled />
                    <Select loading style={{ width: 180 }} disabled />
                </>
            )}
        </>
    )
}
