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

export interface ProductWorker {
  reference: string,
  location_id: number,
  provider: string,
  picking: number,
  stock: number
}

export interface Order {

}
