export type StoreInfoDto = {
    slogan: string
    name: string
    description: string
    domain: string
    logo: File
    banner: File
}

export interface StoreDto {
    id: number;
    name: string;
    slogan: string;
    description: string;
    domain: string;
    logoAttachment: string;
    bannerAttachment: string;
    userId: number;
  }
  