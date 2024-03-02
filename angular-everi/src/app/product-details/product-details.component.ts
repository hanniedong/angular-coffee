import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productId!: number;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productId = parseInt(this.route.snapshot.params['id']);
    this.getProductDetails(this.productId);
  }

  getProductDetails(productId: number): void {
    this.productService.getProduct(productId).subscribe((product) => {
      this.product = product;
    });
  }

  addToCart(): void {
    // Your logic to add product to cart goes here
    alert('Product added to cart!');
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
