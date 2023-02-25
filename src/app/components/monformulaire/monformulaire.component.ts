import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-monformulaire',
  templateUrl: './monformulaire.component.html',
  styleUrls: ['./monformulaire.component.css']
})
export class MonformulaireComponent implements OnInit{

  formulaireadjoumani!: FormGroup;

  constructor(private daniel : FormBuilder) {}

   submit(){
    console.log(this.formulaireadjoumani);
   };

  ngOnInit() {
    this.formulaireadjoumani = this.daniel.group({
      name: ['', Validators.maxLength(6)],
      prenom: [''],
      telephone: ['', Validators.required],
    })

}

}
