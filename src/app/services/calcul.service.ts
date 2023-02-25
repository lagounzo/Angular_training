import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }

  somme(nb1: number, nb2: number) {
    return nb1 + nb2;
  }
}
