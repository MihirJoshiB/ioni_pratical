import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public topic:any;
  public newsdata:any;
  constructor(public api:ApiService){}
  search(){
    this.api.getnews(this.topic).subscribe(result =>{
      console.log(result);
      this.newsdata=result['articles'];

    });
  }

}
