export interface Product {
  reference: string,
  description: string,
  stock: Number;
  picking: Number;
  warning_stock: Number;
  image: string;
  provider_id: Number;
  location_id: string;
}
