import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloatosService {

  constructor() { }
  bienvenue(){
    return "Bienvenue chez Atos"
  }
}
