export type EditProductDto = {
  name?: string;
  description?: string;
  attachments?: string[];
  isActive?: boolean;
  size?: string;
  minimumOrder?: number;
  storeId?: number;
};

export type CreateProductDto = {
  name: string;
  url: string;
  categoryId: string;
  description: string;
  attachments: string[];
  minimumOrder: number;
  isActive: boolean;
  storeId: number;
  variant?: CreateVariantDto;
};

export type CreateVariantDto = {
  name: string;
  isActive: boolean;
  variantOptions?: CreateVariantOptionDto[];
};

export type CreateVariantOptionDto = {
  name: string;
  variantOptionValue?: CreateVariantOptionValueDto;
};

export type CreateVariantOptionValueDto = {
  sku: string;
  weight: number;
  stock: number;
  price: number;
  isActive: boolean;
};
