interface Wards {
    name: string;
    code: number;
    codename: string;
    division_type: string;
    short_codename: string;
}

interface Districts {
    name: string;
    code: number;
    codename: string;
    division_type: string;
    short_codename: string;
    wards: Wards[];
}

interface Provinces {
    name: string;
    code: number;
    division_type: string;
    codename: string;
    phone_code: number;
    districts: Districts[];
};


