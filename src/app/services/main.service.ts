import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../intarfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

 
  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://my-json-server.typicode.com/orlovskyalex/jellyfish-fake-rest-server/posts'
  }

  public getPosts(): Observable<Array<IPost>> {
    return this.http.get<Array<IPost>>(this.url); //запит для прийому даних з сервера
  }
}