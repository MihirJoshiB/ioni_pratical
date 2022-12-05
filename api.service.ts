import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apikey:any='70c168c828974805bd5403c5b50c39ad';

  constructor(public http:HttpClient) { }
  getnews(topic: string){
    return this.http.get('https://newsapi.org/v2/everything?q='+topic+'&from=2022-11-04&sortBy=publishedAt&apiKey='+this.apikey);
  }
}
