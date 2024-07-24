import { useToast } from '@/components/ui/use-toast'
import { LocationDto } from '@/dtos/LocationDto'
import { StoreDto } from '@/dtos/StoreInfoDto'
import API from '@/networks/api'
import { useMutation, UseMutationResult, useQuery, useQueryClient } from '@tanstack/react-query'

interface UseStoreQuery {
    store: StoreDto
    location: LocationDto
    isStoreLoading: boolean
    isLocationLoading: boolean
    createStore: UseMutationResult<
        void,
        Error,
        {
            data: FormData
        },
        unknown
    >
    createLocation: UseMutationResult<
        void,
        Error,
        {
            data: LocationDto
        },
        unknown
    >

    deleteLocation: UseMutationResult<void, Error, void, unknown>
    editStore: UseMutationResult<
        void,
        Error,
        {
            data: FormData
        },
        unknown
    >
}

function useStoreQuery(): UseStoreQuery {
    const queryClient = useQueryClient()
    const { toast } = useToast()

    const { data: store, isLoading: isStoreLoading } = useQuery({
        queryKey: ['store'],
        queryFn: async () => {
            return await API.STORE.GET_STORE()
        },
    })

    const { data: location, isLoading: isLocationLoading } = useQuery({
        queryKey: ['storeLocation'],
        queryFn: async () => {
            return await API.STORE.GET_STORE_LOCATION()
        },
    })

    const createStore = useMutation({
        mutationFn: async ({ data }: { data: FormData }) => {
            await API.STORE.CREATE(data)
        },
        onSuccess: async () => {
            queryClient.invalidateQueries({ queryKey: ['store'] })
            toast({
                title: 'Toko berhasil dibuat!!',
                description: 'Kami berhasil membuat toko kamu.',
                variant: 'success',
            })
        },

        onError: () => {
            toast({
                title: 'Gagal membuat toko kamu',
                description: 'Terjadi kesalahan saat membuat toko kamu.',
                variant: 'failed',
            })
        },
    })

    const editStore = useMutation({
        mutationFn: async ({ data }: { data: FormData }) => {
            await API.STORE.UPDATE_STORE(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['store'] })
            toast({
                title: 'Toko berhasil diedit!!',
                description: 'Kami berhasil edit toko kamu.',
                variant: 'success',
            })
        },

        onError: () => {
            toast({
                title: 'Gagal edit toko kamu',
                description: 'Terjadi kesalahan saat edit toko kamu.',
                variant: 'failed',
            })
        },
    })

    const createLocation = useMutation({
        mutationFn: async ({ data }: { data: LocationDto }) => {
            await API.STORE.CREATE_LOCATION(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['storeLocation'] })
            toast({
                title: 'Lokasi toko berhasil ditambahkan!!',
                description: 'Kami berhasil menambahkan lokasi toko kamu.',
                variant: 'success',
            })
        },

        onError: () => {
            toast({
                title: 'Gagal menambahkan lokasi toko kamu',
                description: 'Terjadi kesalahan saat menambahkan lokasi toko kamu.',
                variant: 'failed',
            })
        },
    })

    const deleteLocation = useMutation({
        mutationFn: async () => {
            await API.STORE.DELETE_STORE_LOCATION()
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['storeLocation'] })
            toast({
                title: 'Lokasi toko berhasil dihapus!!',
                description: 'Kami berhasil menghapus lokasi toko kamu.',
                variant: 'success',
            })
        },

        onError: () => {
            toast({
                title: 'Gagal menghapus lokasi toko kamu',
                description: 'Terjadi kesalahan saat menghapus lokasi toko kamu.',
                variant: 'failed',
            })
        },
    })

    return {
        store,
        location,
        isLocationLoading,
        isStoreLoading,
        createStore,
        createLocation,
        deleteLocation,
        editStore,
    }
}

export default useStoreQuery
