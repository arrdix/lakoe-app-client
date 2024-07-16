export type EditProductDto = {
    name?: string
    description?: string
    attachments?: string[]
    isActive?: boolean
    size?: string
    minimumOrder?: number
    storeId?: number
}

export type CreateProductDto = {
    name: string
    description: string
    attachments: string[]
    isActive?: boolean
    minimumOrder: number
    storeId: number
    categoryId: number
    url: string
    variant?: CreateVariantDto
}

export type CreateVariantDto = {
    name: string | undefined
    isActive?: boolean
    variantOptions?: CreateVariantOptionDto[]
}

export type CreateVariantOptionDto = {
    name: string
    variantOptionValue?: CreateVariantOptionValueDto
}

export type CreateVariantOptionValueDto = {
    sku: string | undefined
    weight: number | undefined
    stock: number | undefined
    price: number | undefined
    isActive?: boolean | undefined
}
