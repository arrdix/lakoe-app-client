import axios from "axios";
import CONFIG from "@/configs/config";
import { EditProductDto, UpdateVariantOptionValueDto } from "@/dtos/ProductDto";
import { CreateOrderDto, UpdateOrderDto } from "@/dtos/OrderDto";
import {
  forgotPasswordDto,
  loginDto,
  registerDto,
  resetPasswordDto,
} from "@/dtos/AuthDto";
import LOCAL_STORAGE from "@/networks/storage";
import { CartDto } from "@/dtos/CartDto";
import { CartItemDto } from "@/dtos/CartItemDto";
import { CourierDto } from "@/dtos/CourierDto";
import { GetRatesDto } from "@/dtos/GetRatesDto";
import { StoreInfoDto } from "@/dtos/StoreInfoDto";

const API = {
  PRODUCT: {
    GET_ALL_BY_ID: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/product/id`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    GET_ONE_BY_ID: async (id: number) => {
      try {
        const response = await axios.get(
          `${CONFIG.BASE_URL}/product/id/${id}`,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    GET_ALL_BY_SKU: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/product/sku`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    GET_ONE_BY_SKU: async (sku: string) => {
      try {
        const response = await axios.get(
          `${CONFIG.BASE_URL}/product/sku/${sku}`,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    CREATE: async (data: FormData) => {
      try {
        const response = await axios.post(`${CONFIG.BASE_URL}/product`, data, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            "Content-Type": "multipart/form-data",
          },
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    UPDATE: async (id: number, data: EditProductDto) => {
      try {
        const response = await axios.patch(
          `${CONFIG.BASE_URL}/product/${id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    DELETE: async (id: number) => {
      try {
        const response = await axios.delete(
          `${CONFIG.BASE_URL}/product/${id}`,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    DELETE_BY_SKU: async (sku: string) => {
      try {
        const response = await axios.delete(
          `${CONFIG.BASE_URL}/product/sku/${sku}`,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    DELETE_MANY_BY_SKU: async (skus: string[]) => {
      const payload = {
        skus,
      };
      try {
        const response = await axios.delete(
          `${CONFIG.BASE_URL}/product/delete/skus`,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
            data: payload,
          }
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    UPDATE_IS_ACTIVE_BY_SKU: async (sku: string) => {
      try {
        console.log("ini auth", `Bearer ${LOCAL_STORAGE.GET()}`);
        const response = await axios.patch(
          `${CONFIG.BASE_URL}/product/update-isActive/${sku}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    NONACTIVED_MANY_BY_SKU: async (skus: string[]) => {
      const payload = {
        skus,
      };
      try {
        const response = await axios.patch(
          `${CONFIG.BASE_URL}/product/nonActived/skus`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    UPDATE_BY_SKU: async (sku: string, data: UpdateVariantOptionValueDto) => {
      if (data.price) {
        data.price = Number(data.price);
      }
      if (data.stock) {
        data.stock = Number(data.stock);
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
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
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
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    GET_ONE: async (id: number) => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/order/${id}`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    CREATE: async (data: CreateOrderDto) => {
      try {
        const response = await axios.post(`${CONFIG.BASE_URL}/order`, data, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    UPDATE: async (id: number, data: UpdateOrderDto) => {
      try {
        const response = await axios.patch(
          `${CONFIG.BASE_URL}/order/${id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    DELETE: async (id: number) => {
      try {
        const response = await axios.delete(`${CONFIG.BASE_URL}/order/${id}`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },
  },

  AUTH: {
    REGISTER: async (data: registerDto) => {
      try {
        const response = await axios.post(
          `${CONFIG.BASE_URL}/auth/register`,
          data
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    LOGIN: async (data: loginDto) => {
      try {
        const response = await axios.post(
          `${CONFIG.BASE_URL}/auth/login`,
          data
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    FORGOT: async (data: forgotPasswordDto) => {
      try {
        const response = await axios.post(
          `${CONFIG.BASE_URL}/auth/forgot`,
          data
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
      }
    },

    RESET: async (data: resetPasswordDto, token: string) => {
      console.log(data);
      console.log(token);
      try {
        const response = await axios.patch(
          `${CONFIG.BASE_URL}/auth/reset`,
          data,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }
        throw error;
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
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },
  },

  CART: {
    CREATE: async (data: CartDto) => {
      try {
        const response = await axios.post(`${CONFIG.BASE_URL}/cart`, data, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    FIND_ALL_UNCOMPLETE: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/cart/uncomplete`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    FIND_ONE_UNCOMPLETE: async (storeId: number) => {
      try {
        const response = await axios.get(
          `${CONFIG.BASE_URL}/cart/uncomplete/${storeId}`,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },
  },

  CART_ITEM: {
    CREATE: async (data: CartItemDto) => {
      try {
        const response = await axios.post(
          `${CONFIG.BASE_URL}/cart-item`,
          data,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    COUNT: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/cart-item/count`, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },
  },

  COURIER: {
    CREATE: async (data: CourierDto) => {
      try {
        const response = await axios.post(`${CONFIG.BASE_URL}/courier`, data, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    GET_RATES: async (data: GetRatesDto) => {
      try {
        const response = await axios.post(
          `${CONFIG.BASE_URL}/courier/rateks`,
          data,
          {
            headers: {
              Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
            },
          }
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },
  },

  LOCATION: {
    GET_PROVINCE: async () => {
      try {
        const response = await axios.get(
          `https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    GET_CITY: async (id: number) => {
      try {
        const response = await axios.get(
          `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${id}.json`
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    GET_DISTRICT: async (id: number) => {
      try {
        const response = await axios.get(
          `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${id}.json`
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    GET_VILLAGE: async (id: number) => {
      try {
        const response = await axios.get(
          `https://www.emsifa.com/api-wilayah-indonesia/api/villages/${id}.json`
        );

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },
  },

  STORE: {
    CREATE: async (data: FormData) => {
      try {
        const response = await axios.post(`${CONFIG.BASE_URL}/store`, data, {
          headers: {
            Authorization: `Bearer ${LOCAL_STORAGE.GET()}`,
          },
        });

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        } else {
          throw new Error("Unexpected error");
        }
      }
    },
  },
};

export default API;
