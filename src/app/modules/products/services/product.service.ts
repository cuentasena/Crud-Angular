import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productos: Product[] = [];
  private siguienteId: number = 1;

  constructor() { }

  obtenerProductos(): Product[] {
    return [...this.productos];
  }

  buscarProductos(termino: string): Product[] {
    if (!termino || termino.trim() === '') {
      return this.obtenerProductos();
    }
    const busqueda = termino.toLowerCase().trim();
    return this.productos.filter(producto =>
      producto.nombre.toLowerCase().includes(busqueda)
    );
  }

  agregarProducto(nombre: string, precio: number): void {
    const nuevoProducto: Product = {
      id: this.siguienteId++,
      nombre: nombre,
      precio: precio
    };
    this.productos.push(nuevoProducto);
  }

  eliminarProducto(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}