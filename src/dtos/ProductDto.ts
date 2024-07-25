export type EditProductDto = {
    name?: string
    description?: string
    attachments?: string[]
    isActive?: boolean
    size?: string
    minimumOrder?: string
    storeId?: string
}

export type CreateProductDto = {
    name: string
    description: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    attachments: any
    isActive?: string
    minimumOrder: string
    storeId: string
    categoryName: string
    url: string
    variant?: CreateVariantDto
}

export type CreateVariantDto = {
    name: string
    isActive?: boolean
    variantOptions?: CreateVariantOptionDto[]
}

export type CreateVariantOptionDto = {
    name: string
    variantOptionValue?: CreateVariantOptionValueDto
}

export type CreateVariantOptionValueDto = {
    sku: string
    weight: string
    stock: string
    price: string
    isActive: string
}

export type UpdateVariantOptionValueDto = {
    sku?: string | undefined
    weight?: number | undefined
    stock?: number | undefined
    price?: number | undefined
    isActive?: boolean | undefined
}
