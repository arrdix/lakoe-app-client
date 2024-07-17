import axios from 'axios'
import CONFIG from '@/configs/config'
import { CreateProductDto, EditProductDto } from '@/dtos/ProductDto'
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

        CREATE: async (data: CreateProductDto) => {
            try {
                const response = await axios.post(`${CONFIG.BASE_URL}/product`, data, {
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
