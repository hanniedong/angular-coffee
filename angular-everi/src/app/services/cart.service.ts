import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCount: number = 0;

  constructor() {}

  getCartCount(): number {
    return this.cartCount;
  }

  addToCart() {
    this.cartCount++;
    console.log('hit');
  }
}
