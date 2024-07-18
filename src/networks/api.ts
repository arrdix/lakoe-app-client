import axios from 'axios'
import CONFIG from '@/configs/config'
import { CreateProductDto, EditProductDto, UpdateVariantOptionValueDto } from '@/dtos/ProductDto'
import { CreateOrderDto, UpdateOrderDto } from '@/dtos/OrderDto'
import { loginDto, registerDto } from '@/dtos/AuthDto'
import LOCAL_STORAGE from '@/networks/storage'

const API = {
    PRODUCT: {
        GET_ALL_BY_ID: async () => {
            try {
                const response = await axios.get(`${CONFIG.BASE_URL}/product/id`, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }
                throw error
            }
        },

        GET_ONE_BY_ID: async (id: number) => {
            try {
                const response = await axios.get(`${CONFIG.BASE_URL}/product/id/${id}`, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },

        GET_ALL_BY_SKU: async () => {
            try {
                const response = await axios.get(`${CONFIG.BASE_URL}/product/sku`, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },

        GET_ONE_BY_SKU: async (sku: string) => {
            try {
                const response = await axios.get(`${CONFIG.BASE_URL}/product/sku/${sku}`, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },

        CREATE: async (data: FormData) => {
            try {
                const response = await axios.post(`${CONFIG.BASE_URL}/product`, data, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                        'Content-Type': 'multipart/form-data',
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },

        UPDATE: async (id: number, data: EditProductDto) => {
            try {
                const response = await axios.patch(`${CONFIG.BASE_URL}/product/${id}`, data, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },

        DELETE: async (id: number) => {
            try {
                const response = await axios.delete(`${CONFIG.BASE_URL}/product/${id}`, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },

        DELETE_BY_SKU: async (sku: string) => {
            try {
                const response = await axios.delete(`${CONFIG.BASE_URL}/product/sku/${sku}`, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },

        DELETE_MANY_BY_SKU: async (skus: string[]) => {
            const payload = {
                skus,
            }
            try {
                const response = await axios.delete(`${CONFIG.BASE_URL}/product/delete/skus`, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                    data: payload,
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },

        UPDATE_IS_ACTIVE_BY_SKU: async (sku: string) => {
            try {
                console.log('ini auth', `Bearer ${LOCAL_STORAGE.GET()}`)
                const response = await axios.patch(
                    `${CONFIG.BASE_URL}/product/update-isActive/${sku}`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                        },
                    }
                )

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },


        NONACTIVED_MANY_BY_SKU: async (skus: string[]) => {
            const payload = {
                skus,
            }
            try {
                const response = await axios.patch(`${CONFIG.BASE_URL}/product/nonActived/skus`,payload, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },

        UPDATE_BY_SKU: async (sku: string, data: UpdateVariantOptionValueDto) => {
            if (data.price) {
                data.price = Number(data.price)
            }
            if (data.stock) {
                data.stock = Number(data.stock)
            }
            try {
                const response = await axios.patch(
                    `${CONFIG.BASE_URL}/product/update-bySKU/${sku}`,
                    data,
                    {
                        headers: {
                            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                        },
                    }
                )

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },
    },

    ORDER: {
        GET_ALL: async () => {
            try {
                const response = await axios.get(`${CONFIG.BASE_URL}/order`, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },

        GET_ONE: async (id: number) => {
            try {
                const response = await axios.get(`${CONFIG.BASE_URL}/order/${id}`, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },

        CREATE: async (data: CreateOrderDto) => {
            try {
                const response = await axios.post(`${CONFIG.BASE_URL}/order`, data, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },

        UPDATE: async (id: number, data: UpdateOrderDto) => {
            try {
                const response = await axios.patch(`${CONFIG.BASE_URL}/order/${id}`, data, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },

        DELETE: async (id: number) => {
            try {
                const response = await axios.delete(`${CONFIG.BASE_URL}/order/${id}`, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },
    },

    AUTH: {
        REGISTER: async (data: registerDto) => {
            try {
                const response = await axios.post(`${CONFIG.BASE_URL}/auth/register`, data)

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }
                throw error
            }
        },

        LOGIN: async (data: loginDto) => {
            try {
                const response = await axios.post(`${CONFIG.BASE_URL}/auth/login`, data)

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }
                throw error
            }
        },
    },

    USER: {
        GET_LOGGED_USER: async () => {
            try {
                const response = await axios.get(`${CONFIG.BASE_URL}/user/logged`, {
                    headers: {
                        Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
                    },
                })

                return response.data
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    throw error
                }

                throw error
            }
        },
    },
}

export default API
