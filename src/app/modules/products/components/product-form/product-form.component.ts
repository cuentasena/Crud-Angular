import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  standalone: false,
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  nombre: string = '';
  precio: string = '';

  constructor(private productService: ProductService) { }

  esValido(): boolean {
    const precioNum = parseFloat(this.precio);
    return this.nombre.trim() !== '' &&
      this.precio !== '' &&
      !isNaN(precioNum) &&
      precioNum > 0;
  }

  crearProducto(): void {
    if (!this.esValido()) return;

    this.productService.agregarProducto(this.nombre, parseFloat(this.precio));
    this.nombre = '';
    this.precio = '';
  }
}