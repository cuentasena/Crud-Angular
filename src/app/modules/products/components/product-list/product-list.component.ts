import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productos: Product[] = [];
  terminoBusqueda: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.actualizarLista();
  }

  actualizarLista(): void {
    this.productos = this.productService.buscarProductos(this.terminoBusqueda);
  }

  buscar(): void {
    this.actualizarLista();
  }

  limpiarBusqueda(): void {
    this.terminoBusqueda = '';
    this.actualizarLista();
  }
}