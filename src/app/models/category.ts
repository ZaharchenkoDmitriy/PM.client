import {Work} from './work';

export class Category {
  constructor(title: string, works: Work[]) {
    this.title = title;
    this.works = works;
  }

  id: number;
  title: string;
  works: Work[];
}
