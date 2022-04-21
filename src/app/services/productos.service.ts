import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  cargando = true;
  productoFilrado: Producto[] = [];



  constructor(private http: HttpClient) {   
    this.cargarproductos();    
  }


  private cargarproductos(){

    this.http.get('https://portafolio-9beb9-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((resp: any) => {
        
        
        this.productos = resp;
        
        setTimeout(()=>{
          this.cargando = false;
        }, 2000);               
    });
  }
  
  getProductos(id:String){
    return  this.http.get(`https://portafolio-9beb9-default-rtdb.firebaseio.com/productos/${id}.json`);
    
  }

  buscarProducto(termino:string){

    this.productoFilrado =  this.productos.filter(producto =>{  
      return true;
    });

    this.filtrarProductos(termino);
  }



  private filtrarProductos(termino:string ){
    this.productoFilrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach((prod:any) =>{
      if( prod.categoria.indexOf(termino) >=0 || prod.titulo.indexOf(termino) >=0){
        this.productoFilrado.push(prod);
      }
    });
  }

  

}
