import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})

export class FactureComponent implements OnInit{

totaux? : number;

ngOnInit(){
  this.totaux = this.totalService.totalDepense(7000,41000);
}

constructor(private totalService : FactureService){}

}
