import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// Interface Product from file products
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnInit {
  constructor() {}
  @Input() product!: Product;
  @Output() notify = new EventEmitter();

  ngOnInit(): void {}
}
