export class Work {
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  id: number;
  title: string;
  price: number;
  cost: number;
  square: number;
}
