export interface Product {
  reference: string,
  description: string,
  stock: number;
  picking: number;
  warning_stock_limit: number;
  image: string;
  provider_id: number;
  location_id: string;
}

export interface ProductWorker {
  reference: string,
  location_id: number,
  provider: string,
  picking: number,
  stock: number
}

export interface Order {

}
