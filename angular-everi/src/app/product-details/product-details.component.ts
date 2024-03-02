import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product: any;
  cartCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.productId = parseInt(this.route.snapshot.params['id']);
    this.getProductDetails(this.productId);
    this.cartCount = this.cartService.getCartCount();
  }

  getProductDetails(productId: number): void {
    this.productService.getProduct(productId).subscribe((product) => {
      this.product = product;
    });
  }

  addToCart(): void {
    console.log('HIT');
    this.cartService.addToCart();
    this.updateCartCount();
    alert('Product added to cart!');
  }

  updateCartCount(): void {
    this.cartCount = this.cartService.getCartCount();
    this.cdr.detectChanges(); // Manually trigger change detection
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
