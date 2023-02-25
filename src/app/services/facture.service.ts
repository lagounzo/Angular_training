import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor() { }

  totalDepense(sum1:number , sum2:number){
    return sum1+sum2;
  }
}
