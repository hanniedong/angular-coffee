import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Cappuccino',
      description: 'Smooth and creamy',
      price: 3.99,
      imageUrl: 'path/to/cappuccino.jpg',
    },
    {
      id: 2,
      name: 'Espresso',
      description: 'Strong and bold',
      price: 2.49,
      imageUrl: 'path/to/espresso.jpg',
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Rich and frothy',
      price: 4.49,
      imageUrl: 'path/to/latte.jpg',
    },
  ];

  constructor() {}

  getProduct(id: number): Observable<Product> {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return of(product);
    } else {
      throw Error('Product not found');
    }
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
