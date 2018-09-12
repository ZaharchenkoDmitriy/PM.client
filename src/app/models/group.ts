import {Work} from './work';

export class Group {
  constructor(title: string, works: Work[]) {
    this.title = title;
    this.works = works;
  }

  id: number;
  title: string;
  works: Work[];
}
