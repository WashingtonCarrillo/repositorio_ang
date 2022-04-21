import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public _productos: ProductosService ) { }

  ngOnInit(): void {
  }



  //firebase  
  //https://portafolio-9beb9-default-rtdb.firebaseio.com/productos.json
}
