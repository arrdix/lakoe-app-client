import CONFIG from "@/configs/config";
import {
  CreateOrderDTO,
  CreateProductDTO,
  EditProductDTO,
  UpdateOrderDTO,
} from "@/dtos/dto";
import axios from "axios";

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

    GET_ONE: async (id: number) => {
      try {
        const response = await axios.get(`${CONFIG.BASE_URL}/product/${id}`);

        return response.data;
      } catch (error) {
        if (axios.isAxiosError(error)) {
          throw error;
        }

        throw error;
      }
    },

    CREATE: async (data: CreateProductDTO) => {
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

    UPDATE: async (id: number, data: EditProductDTO) => {
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

    CREATE: async (data: CreateOrderDTO) => {
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

    UPDATE: async (id: number, data: UpdateOrderDTO) => {
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
};

export default API;
