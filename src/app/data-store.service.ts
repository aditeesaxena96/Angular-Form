import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  data;
  constructor() { }
  store(datarecieve){
    this.data=datarecieve;
  }
  getStoreData(){
    return this.data;
  }

}
