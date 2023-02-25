import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // docs pour utiliser formReactive
  // https://angular.io/api/forms/FormBuilder


  monFormulaire!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.monFormulaire = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: [''],
    })
  }

  soumissionForm() {
    console.log(this.monFormulaire.valid);
  }


  // FormGroup
  // FormControlName
  // FormBuilder
  // Validators

}
