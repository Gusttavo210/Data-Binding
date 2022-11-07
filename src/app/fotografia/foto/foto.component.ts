
//Decorar a classe - Utilizar um decorator
//Decorator diz a função da classe

import { style } from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Fotos } from "./foto";

@Component({
    selector:'app-foto',
    templateUrl: './foto.Component.html',
    styleUrls: ['./foto.Component.css'],
})
export class FotoComponent{
    titulo = "Minhas Fotos";
    nameButton ="Fotos Pares";
    control = true;

  //Criar um array de objetos para as fotos

imagens: Fotos[] = [

   // {img: "https://i.pinimg.com/originals/16/22/57/16225720dcb1495137f27ba93ba9b12d.jpg", titulo: "Dragon Ball Z" },

    //{img: "https://i0.wp.com/resenhandosonhos.com/wp-content/uploads/2021/05/inuyasha1.png?resize=1000%2C750&ssl=1", titulo: "Inuyasha"},

   // {img: "http://pm1.narvii.com/6450/8785c3d3a680edcd1150dbbfcc2d4599eb03b7cc_00.jpg", titulo: "Cavaleiros do Zodiacos"},

  // {img: "https://roteironerd.com/wp-content/uploads/2021/08/bleach.jpg", titulo: "Bleach"},

   // {img: "https://img.olhardigital.com.br/wp-content/uploads/2021/06/yuyu-hakusho-ovas.jpg", titulo: "Yu Yu Hakusho"},

    //{img: "https://images.justwatch.com/poster/190385337/s592/ruroni-kenshin-meiji-kenkaku-romantan", titulo: "Samurai X"}

  ];

constructor(private joao: HttpClient){
  joao.get<Fotos[]>('http://localhost:3000/fotos').subscribe(caixa => this.imagens = caixa)
}


  mudar(){

    this.control = !this.control;
    if(this.nameButton == "Todas Imagens"){
      this.nameButton = "Fotos Pares"
    }else{
      this.nameButton ="Todas Imagens";
    }
  }
}
