import API from '@/networks/api'
import { EditProductDto } from '@/dtos/ProductDto'
import { Order } from '@/types/OrderType'
import { useMutation, UseMutationResult, useQuery, useQueryClient } from '@tanstack/react-query'

interface UseOrderQuery {
    orders: Order[]
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

function useOrderQuery(): UseOrderQuery {
    const queryClient = useQueryClient()

    const { data: orders, isLoading } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            return await API.ORDER.GET_ALL()
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

    return { orders, isLoading, updateProduct }
}

export default useOrderQuery
