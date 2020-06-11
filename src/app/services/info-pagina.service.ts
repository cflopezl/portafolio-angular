import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: any = [];
  cargada = false;

  constructor( private http: HttpClient) {
    console.log("llamada al servicio");
    this.cargarInfo();
    this.cargarEquipo();

   }

   private cargarInfo(){
      this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPagina) => {
        this.cargada=true;
        this.info=resp;
      });
   }

   private cargarEquipo(){
    this.http.get('https://angular-html-e9d7e.firebaseio.com/equipo.json')
    .subscribe( resp  => {
      this.equipo=resp;
      console.log(resp);
    });

   }
}
