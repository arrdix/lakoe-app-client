export type LocationDto = {
    id?: number;
    name: string;
    address: string;
    postalCode: number;
    cityDistrict: string;
    latitude: number;
    longtitude: number;
    isMainLocation: boolean;
    storeId: number;
    profileId: number;
}