import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';

// Class that generates default crud operations:
// getAll, getById, create, delete, deleteById, update

// To use this class, create class that extends CrudService
// And create two variables:
// crudObjects - variable that refers to all your objects
// url - part of api that started after host

@Injectable()
export class CrudService {
  public url: string;
  public objects: BehaviorSubject<any[]>;

  constructor(private httpClient: HttpClient) {}

  public getAll() {
    const response = this.httpClient.get(this.url);
    response.subscribe((resObjects: any[]) => this.objects.next(resObjects));
  }

  public getById(id: number) {
    return this.httpClient.get(this.url + id);
  }

  public create(obj: any) {
    delete obj.id;
    return this.httpClient.post(this.url, obj).subscribe((response: any) => {
      obj.id = response.id;
      const objects = this.objects.getValue();
      objects.push(obj);
      this.objects.next(objects);
    });
  }

  public delete(obj: any) {
    return this.httpClient.delete(this.url + obj.id);
  }

  public deleteById(id: number) {
    return this.httpClient.delete(this.url + id);
  }
}

export function crudObjects(target: CrudService, key: string): any {
  let val;
  return {
    set: function (value) {
      val = value;
      target.objects = val;
    },
    get: function() {
      return val;
    }
  };
}

export function crudUrl(target: CrudService, key: string): any {
  let val;
  return {
    set: function (value) {
      val = environment.host + '/' + value + '/';
      target.url = environment.host + '/' + value + '/';
    },
    get: function() {
      return val;
    }
  };
}
