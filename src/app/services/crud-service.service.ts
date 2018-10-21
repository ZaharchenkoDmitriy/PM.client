import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class CrudService {
  private url: string;
  private objects;

  constructor(private httpClient: HttpClient) {
    this.postConstruct();
  }

  postConstruct() {
  }

  public initCrud(url: string, objects) {
    this.objects = objects;
    this.url = environment.host + url + '/';
  }

  public getAll() {
    const response = this.httpClient.get(this.url);
    response.subscribe((resObjects) => this.objects.next(resObjects));
  }

  public getById(id: number) {
    return this.httpClient.get(this.url + id);
  }

  public create(obj: any) {
    return this.httpClient.post(this.url, obj);
  }

  public delete(obj: any) {
    return this.httpClient.delete(this.url + obj.id);
  }

  public deleteById(id: number) {
    return this.httpClient.delete(this.url + id);
  }
}
