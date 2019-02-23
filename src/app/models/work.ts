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

  static defaultWork(title: string, price: number) {
    return new Work(0, title, price, 0, 0);
  }

}
