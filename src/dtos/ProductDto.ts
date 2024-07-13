export type CreateProductDto = {
    productName: string
    productURL: string
    productCategory: string
    productDescription: string
    productAttachments: string
    productMinimumOrder: number

    variantName: string
    variantIsActive: boolean
    variantOptions: CreateVariantOptionDto[]
}

export type CreateVariantOptionDto = {
    variantOptionName: string
    variantOptionValue: CreateVariantOptionValueDto
}

export type CreateVariantOptionValueDto = {
    variantOptionValueSKU: string
    variantOptionValueWeight: number
    variantOptionValueStock: number
    variantOptionValuePrice: number
    variantOptionValueIsActive: boolean
}
