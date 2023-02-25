import { Component, OnInit } from '@angular/core';
import { KilometreService } from 'src/app/services/kilometre.service';
import { CalculService } from '../../services/calcul.service'

@Component({
  selector: 'app-contact-rachelle',
  templateUrl: './contact-rachelle.component.html',
  styleUrls: ['./contact-rachelle.component.css']
})
export class ContactRachelleComponent implements OnInit {

  resut?: number;
  distance :number = 0;

  constructor(
    private monServiceCalcul: CalculService,
    private distanceService : KilometreService
    ) {}

  ngOnInit() {
    this.resut = this.monServiceCalcul.somme(45, 5);
    this.distance = this.distanceService.distance(200,700);
  }

}
