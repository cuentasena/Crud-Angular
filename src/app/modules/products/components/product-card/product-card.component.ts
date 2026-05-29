import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() producto!: Product;
  @Output() productoEliminado = new EventEmitter<void>();

  constructor(private productService: ProductService) { }

  eliminar(): void {
    this.productService.eliminarProducto(this.producto.id);
    this.productoEliminado.emit();
  }
}