export class Work {
  constructor(id: number, title: string, price: number, cost: number, square: number) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.cost = cost;
    this.square = square;
  }

  id: number;
  title: string;
  price: number;
  cost: number;
  square: number;
}
