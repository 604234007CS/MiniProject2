import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoaddataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoaddataProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoaddataProvider Provider');
  }


  getApartment(){
    const url = "http://localhost/todoslim3/public/Apartment";
    return this.http.get(url);
  }

  getMansion(){
    const url = "http://localhost/todoslim3/public/Mansion";
    return this.http.get(url);
  }

  getCondominium(){
    const url = "http://localhost/todoslim3/public/Condominium";
    return this.http.get(url);
  }

  getDorm(){
    const url = "http://localhost/todoslim3/public/Dorm";
    return this.http.get(url);
  }

  searchrooms(query){
    let url = "http://localhost/todoslim3/public/search/"+query;
    return this.http.get(url);
  }

  loadrooms(){
    let url = "http://localhost/todoslim3/public/room/";
    return this.http.get(url);
  }

  showroom(result){
    let url = "http://localhost/todoslim3/public/showroom/"+result;
    return this.http.get(url);
  }


}

