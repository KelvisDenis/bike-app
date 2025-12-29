export interface Part {
  id: number;
  name: string;
  category: "Moto" | "Bike";
  price: string;
  stock?: number;
}