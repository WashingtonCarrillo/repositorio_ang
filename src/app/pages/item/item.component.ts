import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDesc } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDesc | undefined;
  id:string | undefined;

  constructor(private route: ActivatedRoute,
              public _productos: ProductosService) {

      

     }

  ngOnInit(): void {
    this.route.params.subscribe((parametros: any) => {      
      this._productos.getProductos(parametros['id'])
        .subscribe((producto: ProductoDesc ) => {
          this.id = parametros['id'];
          this.producto = producto;
          
        });

    });
  }

}
