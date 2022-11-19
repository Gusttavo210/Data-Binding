import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fotos } from '../fotografia/foto/foto';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  readonly API = 'http://localhost:3000/fotos';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };


  constructor(private http: HttpClient) { }

getFoto(){
  return this.http.get<Fotos[]>(this.API);
}

postFoto(dados: Fotos){
  return this.http.post(this.API, JSON.stringify(dados), this.httpOptions).subscribe();
}

delFoto(id:number){
  return this.http.delete(this.API + id).subscribe();
}

}
