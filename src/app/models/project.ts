export class Project {
  constructor(title: string, address: string, id: number) {
    this.title = title;
    this.address = address;
    this.id = id;
  }
  id: number;
  title: string;
  address: string;
  projectCost: number;
  dateStart: Date;
  dateEnd: Date;
}
