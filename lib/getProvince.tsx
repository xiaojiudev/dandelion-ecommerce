
export async function getProvincesAPI(): Promise<Provinces[]> {
    const res = await fetch('https://provinces.open-api.vn/api/?depth=3')

    if (!res.ok) throw new Error('Failed to fetch data')

    return res.json()

}

// const a = [
//     {
//         "name": "Thành phố Hà Nội",
//         "code": 1,
//         "codename": "thanh_pho_ha_noi",
//         "division_type": "thành phố trung ương",
//         "phone_code": 24,
//         "districts": [
//             {
//                 "name": "Quận Ba Đình",
//                 "code": 1,
//                 "codename": "quan_ba_dinh",
//                 "division_type": "quận",
//                 "short_codename": "ba_dinh",
//                 "wards": [
//                     {
//                         "name": "Phường Phúc Xá",
//                         "code": 1,
//                         "codename": "phuong_phuc_xa",
//                         "division_type": "phường",
//                         "short_codename": "phuc_xa"
//                     },...
//                 ]
//             },...
//         ]
//     },...

// ]

