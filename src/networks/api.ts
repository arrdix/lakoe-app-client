import axios from "axios";
import CONFIG from "@/configs/config";
import { CreateProductDto, EditProductDto } from "@/dtos/ProductDto";
import { CreateOrderDto, UpdateOrderDto } from "@/dtos/OrderDto";
import { loginDto, registerDto } from "@/dtos/AuthDto";

const API = {
  PRODUCT: {
    GET_ALL: async () => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/product`);

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    GET_ONE: async (sku: string) => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/product/${sku}`);

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    CREATE: async (data: CreateProductDto) => {
      try {
        const response = await axios.post(`${CONFIG.BASE_URL}/product`, data);

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

    DELETE: async (id: number) => {
      try {
        const response = await axios.delete(`${CONFIG.BASE_URL}/product/${id}`);

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
        const response = await axios.get(`${CONFIG.BASE_URL}/order`);

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
        const response = await axios.get(`${CONFIG.BASE_URL}/order/${id}`);

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
        const response = await axios.post(`${CONFIG.BASE_URL}/order`, data);

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

    DELETE: async (id: number) => {
      try {
        const response = await axios.delete(`${CONFIG.BASE_URL}/order/${id}`);

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
  },
};

export default API;
