import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/service/database.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  nameButton = "Cadastrar";
  formulario!:FormGroup;
 

  constructor(
    private formbuilder: FormBuilder,
    private database: DatabaseService
    ) {}

  ngOnInit(): void {
    this.validaForm();
  }

  validaForm(){
    this.formulario = this.formbuilder.group({
      img:['',[Validators.required, Validators.minLength(5)]],
      titulo:['',[Validators.required]]
    });
  }

  cadastro(){
    this.database.postFoto(this.formulario.value);
  }

   /* cadastrar(bastao:any){
    alert('Dados Cadastrados')
    console.log(bastao.value);
  }  */
 

  
}