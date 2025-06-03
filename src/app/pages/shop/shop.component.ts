// src/app/pages/shop/shop.component.ts
import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component'; // Adjust path as needed
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Define a simple interface for a product
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-shop', // The HTML tag you'll use to embed this component
  standalone: true,
  imports: [
	  CommonModule,
  ],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: Product[] = []; // Array to hold your products

  constructor() { } // You might inject services here later (e.g., a ProductService)

  ngOnInit(): void {
    // This method runs when the component is initialized.
    // Here, you'd typically fetch product data from your Go backend API.
    // For now, let's use some dummy data:
    this.loadProducts();
  }

  loadProducts(): void {
    // In a real application, you'd use Angular's HttpClient to make an API call:
    // this.productService.getProducts().subscribe(data => {
    //   this.products = data;
    // });

    // Dummy data for demonstration
    this.products = [
      {
        id: 1,
        name: 'Aninka Action Vest',
        description: 'Anywhere you go.',
        price: 199.00,
        imageUrl: ''
      },
      {
        id: 2,
        name: 'Sticker 5x10 cm',
        description: 'From abstract collection.',
        price: 10.00,
        imageUrl: ''
      },
      {
        id: 3,
        name: 'Laptop skin',
        description: 'Durable UV print',
        price: 20.00,
        imageUrl: ''
      }
    ];
  }

  addToCart(product: Product): void {
    console.log(`Added ${product.name} to cart!`);
    // Here you would implement logic to add the product to a cart service
    // and potentially show a notification to the user.
  }
}
