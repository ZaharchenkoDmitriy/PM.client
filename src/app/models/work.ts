export class Work {
  constructor(id: number, title: string, price: number, cost: number, square: number, work_category_id: number) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.cost = cost;
    this.square = square;
    this.work_category_id = work_category_id;
  }

  id: number;
  title: string;
  price: number;
  cost: number;
  square: number;
  work_category_id: number;

  static defaultWork(title: string, price: number) {
    return new Work(0, title, price, 0, 0, 0);
  }

}
