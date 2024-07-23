import { EditProductDto } from '@/dtos/ProductDto'
import API from '@/networks/api'
import { ProductBySku } from '@/types/ProductBySkuType'
import { useMutation, UseMutationResult, useQuery, useQueryClient } from '@tanstack/react-query'

interface UseProductsQuery {
    products: ProductBySku[]
    isLoading: boolean
    updateProduct: UseMutationResult<
        void,
        Error,
        {
            sku: string
            data: EditProductDto
        },
        unknown
    >
}

function useProductsQuery(): UseProductsQuery {
    const queryClient = useQueryClient()

    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            return await API.PRODUCT.GET_ALL_BY_SKU()
        },
    })

    const updateProduct = useMutation({
        mutationFn: async ({ sku, data }: { sku: string; data: EditProductDto }) => {
            await API.PRODUCT.UPDATE_BY_SKU(sku, data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
        },
    })

    return { products, isLoading, updateProduct }
}

export default useProductsQuery
