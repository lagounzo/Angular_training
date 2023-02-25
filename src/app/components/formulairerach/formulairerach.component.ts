import { Component,OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-formulairerach',
  templateUrl: './formulairerach.component.html',
  styleUrls: ['./formulairerach.component.css']
})
export class FormulairerachComponent  implements OnInit{


  constructor(private formlaire :FormBuilder){}

  form! : FormGroup;
   submit(){
    console.log(this.form);
   };

  ngOnInit(): void {
   this.form = this.formlaire.group({
    nom:['',Validators.required],
    prenom:['',Validators.minLength(3)]
   })
  }

}
