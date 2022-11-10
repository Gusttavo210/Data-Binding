import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nameButton = "Cadastrar";
  formulario!:FormGroup;
 

  constructor(private formbuilder: FormBuilder) {
    this.formulario = formbuilder.group({
      img:['',[Validators.required]],
      titulo:['',[Validators.required]]
    });
   }

  ngOnInit(): void {
  }

  cadastro(){
    console.log(this.formulario.value);
  }

   /* cadastrar(bastao:any){
    alert('Dados Cadastrados')
    console.log(bastao.value);
  }  */
 


}