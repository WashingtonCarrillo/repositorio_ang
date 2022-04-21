import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];


  
  constructor(private http: HttpClient) {        
    this.cargarInfo();
    this.cargarEquipo();
  }

  // Leer archvo JSON  
  private cargarInfo() {    
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        
    });
  }

  // Leer archvo JSON desde firebase
  private cargarEquipo() {
    this.http.get('https://portafolio-9beb9-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp: any) => {
        this.equipo = resp;
        
    });
  }

//////////////////////////// fin de servicio
}
