import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  // Inject ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // extract the productId
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the roduct that correspond with the id provided in route.
    this.product = products.find((product) => product.id == productIdFromRoute);
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    window.alert(`You product ${product.name} has been added to the cart!`);
  }
}
