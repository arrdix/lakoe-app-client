  // Function to format price to IDR
  const formatToIDR = (price: number) => {
    return price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  export default formatToIDR