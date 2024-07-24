import { useToast } from "@/components/ui/use-toast";
import { EditProductDto } from "@/dtos/ProductDto";
import API from "@/networks/api";
import { ProductBySku } from "@/types/ProductBySkuType";
import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

interface UseProductsQuery {
  products: ProductBySku[];
  isLoading: boolean;
  updateProduct: UseMutationResult<
    void,
    Error,
    {
      sku: string;
      data: EditProductDto;
    },
    unknown
  >;
  deleteProduct: UseMutationResult<
    void,
    Error,
    {
      sku: string;
    },
    unknown
  >;
  activedProduct: UseMutationResult<
    void,
    Error,
    {
      sku: string;
      data: EditProductDto;
    },
    unknown
  >;

  nonActivedProduct: UseMutationResult<
    void,
    Error,
    {
      sku: string;
    },
    unknown
  >;

  nonActivedProducts:UseMutationResult<
  void,
  Error,
  {
    skus: string[];
  },
  unknown
>;

deleteProducts:UseMutationResult<
void,
Error,
{
  skus: string[];
},
unknown
>;
}

function useProductsQuery(): UseProductsQuery {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      return await API.PRODUCT.GET_ALL_BY_SKU();
    },
  });

  const updateProduct = useMutation({
    mutationFn: async ({
      sku,
      data,
    }: {
      sku: string;
      data: EditProductDto;
    }) => {
      await API.PRODUCT.UPDATE_BY_SKU(sku, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        title: "Produk Berhasil diubah!",
        description: "Kami berhasil mengubah produk kamu.",
        variant: "success",
      });
    },

    onError: () => {
      toast({
        title: "Gagal mengubah Produk",
        description: "Terjadi kesalahan saat mengubah produk kamu.",
        variant: "failed",
      });
    },
  });

  const deleteProduct = useMutation({
    mutationFn: async ({ sku }: { sku: string }) => {
      await API.PRODUCT.DELETE_BY_SKU(sku);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        title: "Produk Berhasil dihapus!",
        description: "Kami berhasil menghapus produk kamu.",
        variant: "success",
      });
    },

    onError: () => {
      toast({
        title: "Gagal menghapus Produk",
        description: "Terjadi kesalahan saat menghapus produk kamu.",
        variant: "failed",
      });
    },
  });

  const deleteProducts = useMutation({
    mutationFn: async ({ skus }: { skus: string[] }) => {
      await API.PRODUCT.DELETE_MANY_BY_SKU(skus);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        title: `Produk Berhasil dihapus!`,
        description: "Kami berhasil menghapus produk kamu.",
        variant: "success",
      });
    },

    onError: () => {
      toast({
        title: "Gagal menghapus produk",
        description: "Terjadi kesalahan saat menghapus produk kamu.",
        variant: "failed",
      });
    },
  });

  const activedProduct = useMutation({
    mutationFn: async ({
      sku,
      data,
    }: {
      sku: string;
      data: EditProductDto;
    }) => {
      await API.PRODUCT.UPDATE_BY_SKU(sku, data);
      await API.PRODUCT.UPDATE_IS_ACTIVE_BY_SKU(sku);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        title: "Produk Berhasil diaktifkan!",
        description: "Kami berhasil mengaktifkan produk kamu.",
        variant: "success",
      });
    },

    onError: () => {
      toast({
        title: "Gagal mengaktifkan produk",
        description: "Terjadi kesalahan saat mengaktifkan produk kamu.",
        variant: "failed",
      });
    },
  });

  const nonActivedProduct = useMutation({
    mutationFn: async ({ sku }: { sku: string }) => {
      await API.PRODUCT.UPDATE_IS_ACTIVE_BY_SKU(sku);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        title: "Produk Berhasil dinonaktifkan!",
        description: "Kami berhasil mengnonaktifkan produk kamu.",
        variant: "success",
      });
    },

    onError: () => {
      toast({
        title: "Gagal mengnonaktifkan produk",
        description: "Terjadi kesalahan saat mengnonaktifkan produk kamu.",
        variant: "failed",
      });
    },
  });

  const nonActivedProducts = useMutation({
    mutationFn: async ({ skus }: { skus: string[] }) => {
      await API.PRODUCT.NONACTIVED_MANY_BY_SKU(skus);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        title: `Produk Berhasil dinonaktifkan!`,
        description: "Kami berhasil mengnonaktifkan produk kamu.",
        variant: "success",
      });
    },

    onError: () => {
      toast({
        title: "Gagal mengnonaktifkan produk",
        description: "Terjadi kesalahan saat mengnonaktifkan produk kamu.",
        variant: "failed",
      });
    },
  });


  return {
    products,
    isLoading,
    updateProduct,
    deleteProduct,
    deleteProducts,
    activedProduct,
    nonActivedProduct,
    nonActivedProducts,
  };
}

export default useProductsQuery;
