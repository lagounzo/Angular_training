import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KilometreService {

  constructor() { }
  distance(distance1:number,distance2:number){
    return distance2-distance1
  }
}
