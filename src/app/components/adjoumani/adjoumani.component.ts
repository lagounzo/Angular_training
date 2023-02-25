import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HelloatosService } from 'src/app/services/helloatos.service';

@Component({
  selector: 'app-adjoumani',
  templateUrl: './adjoumani.component.html',
  styleUrls: ['./adjoumani.component.css']
})
export class AdjoumaniComponent implements OnInit {

  affiche? : String;
  resut?: number;

  ngOnInit() {
    this.somme(4, 5);
    this.affiche = this.Team.bienvenue();
  }

  somme(nb1: number, nb2: number) {
    this.resut = nb1 + nb2;
  }


  constructor(private Team :HelloatosService){


  }

}
