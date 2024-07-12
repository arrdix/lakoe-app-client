// Define the type for a product
export interface ProductType {
  id: number;
  imageUrl: string;
  NameProduct: string;
  SKU: string;
  stock: number;
  price: number;
  status: boolean;
}

// Dummy data array dengan tambahan properti id
const dummyProduct: ProductType[] = [
  {
    id: 1,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 1",
    SKU: "SKU001",
    stock: 50,
    price: 100000,
    status: true,
  },
  {
    id: 2,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 2",
    SKU: "SKU002",
    stock: 20,
    price: 200000,
    status: true,
  },
  {
    id: 3,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 3",
    SKU: "SKU003",
    stock: 0,
    price: 150000,
    status: true,
  },
  {
    id: 4,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 4",
    SKU: "SKU004",
    stock: 100,
    price: 50000,
    status: false,
  },
  {
    id: 5,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 5",
    SKU: "SKU005",
    stock: 5,
    price: 300000,
    status: true,
  },
  {
    id: 6,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 6",
    SKU: "SKU006",
    stock: 75,
    price: 250000,
    status: false,
  },
  {
    id: 7,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 7",
    SKU: "SKU007",
    stock: 10,
    price: 350000,
    status: true,
  },
  {
    id: 8,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 8",
    SKU: "SKU008",
    stock: 0,
    price: 450000,
    status: false,
  },
  {
    id: 9,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 9",
    SKU: "SKU009",
    stock: 30,
    price: 120000,
    status: true,
  },
  {
    id: 10,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 10",
    SKU: "SKU010",
    stock: 60,
    price: 220000,
    status: true,
  },
  {
    id: 11,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 11",
    SKU: "SKU011",
    stock: 45,
    price: 180000,
    status: true,
  },
  {
    id: 12,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 12",
    SKU: "SKU012",
    stock: 80,
    price: 260000,
    status: true,
  },
  {
    id: 13,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 13",
    SKU: "SKU013",
    stock: 15,
    price: 320000,
    status: true,
  },
  {
    id: 14,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 14",
    SKU: "SKU014",
    stock: 25,
    price: 140000,
    status: false,
  },
  {
    id: 15,
    imageUrl:
      "https://i.pinimg.com/originals/01/88/81/0188818a4d9204aeab2a8646807cbb35.jpg",
    NameProduct: "Product 15",
    SKU: "SKU015",
    stock: 35,
    price: 240000,
    status: true,
  },
];

export default dummyProduct
