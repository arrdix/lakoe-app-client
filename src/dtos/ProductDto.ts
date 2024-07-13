export type CreateProductDto = {
    productName: string
    productURL: string
    productCategory: string
    productDescription: string
    productAttachments: string
    variantName: string
    variantIsActive: boolean
    variantOptionName: string
    variantOptionValueSKU: string
    variantOptionValueWeight: number
    VariantOptionValueStock: number
    VariantOptionValuePrice: number
    VariantOptionValueIsActive: boolean
}
