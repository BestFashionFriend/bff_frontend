import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
   serverUrl= 'https://bestfashionfriend.herokuapp.com';
//serverUrl='http://localhost:3000'

  constructor(private http: HttpClient) { }
  // google(){
  //   return this.http.get(this.serverUrl+'/google');

  // }
  getBlouses(){
    return this.http.get(this.serverUrl+'/blouse');
  }

  getBottomwear(){
    return this.http.get(this.serverUrl+'/bottomwear');
  }

  getTshirt(){
    return this.http.get(this.serverUrl+'/tshirt');
  }

  getBottoms(){
    return this.http.get(this.serverUrl+'/bottoms');
  }
  getJackets(){
    return this.http.get(this.serverUrl+'/jackets');
  }
  getMenaccessories(){
    return this.http.get(this.serverUrl+'/menaccessories');
  }
  getShorts(){
    return this.http.get(this.serverUrl+'/shorts');
  }
  getTraditionalwear(){
    return this.http.get(this.serverUrl+'/traditionalwear');
  }
  getWomenaccessories(){
    return this.http.get(this.serverUrl+'/womenaccessories');
  }
  completeOrder(items)
  {
    return this.http.post(this.serverUrl+'/orders',items);
  }
}