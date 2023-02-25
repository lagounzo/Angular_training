import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  dignostique!: FormGroup;

  constructor(private diagnostiqueForm : FormBuilder){}

  send(){
    console.log(this.dignostique);

  }

  ngOnInit(): void {
    this.dignostique = this.diagnostiqueForm.group({
      name : ['', Validators.required],
      prenom : ['',Validators.required],
      email : ['', Validators.email],
      address :['',Validators.required]
    });
  }


}
