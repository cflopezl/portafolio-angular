import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  public productos : Producto []=[];
  constructor( private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-e9d7e.firebaseio.com/productos_idx.json')
      .subscribe( (res: Producto[]) => {
          console.log(res);
          this.productos = res;
          setTimeout(()=>{
            this.cargando = false;
          }, 2000)          
      });
  }
}
