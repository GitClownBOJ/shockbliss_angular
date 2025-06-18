import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product } from '../pages/shop/shop.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080/api'; // Adjust to match your Go backend URL

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
	  return of(this.getMockProducts());
	   // return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProduct(id: number): Observable<Product> {
	  const product = this.getMockProducts().find(p => p.id === id);
    return of(product!);
    // return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    const filteredProducts = this.getMockProducts().filter(p => p.category === category);
    return of(filteredProducts);
    // return this.http.get<Product[]>(`${this.apiUrl}/products?category=${category}`);
  }

  private getMockProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Premium Headphones',
        description: 'High-quality wireless headphones with noise cancellation',
        category: 'Electronics',
        price: 299.99,
        originalPrice: 399.99,
        imageUrl: 'https://via.placeholder.com/300x200/007bff/ffffff?text=Headphones',
        badge: 'Sale',
        features: ['Wireless', 'Noise Cancelling', '30hr Battery'],
        rating: 4.5,
        reviewCount: 124,
        stock: 15
      },
      {
        id: 2,
        name: 'Smartphone Case',
        description: 'Durable protective case for modern smartphones',
        category: 'Accessories',
        price: 24.99,
        imageUrl: 'https://via.placeholder.com/300x200/28a745/ffffff?text=Phone+Case',
        features: ['Drop Protection', 'Wireless Charging Compatible'],
        rating: 4.2,
        reviewCount: 89,
        stock: 50
      },
      {
        id: 3,
        name: 'Gaming Mouse',
        description: 'High-precision gaming mouse with RGB lighting',
        category: 'Electronics',
        price: 79.99,
        originalPrice: 99.99,
        imageUrl: 'https://via.placeholder.com/300x200/dc3545/ffffff?text=Gaming+Mouse',
        badge: 'New',
        features: ['RGB Lighting', '12000 DPI', 'Programmable Buttons'],
        rating: 4.7,
        reviewCount: 203,
        stock: 8
      },
      {
        id: 4,
        name: 'Wireless Keyboard',
        description: 'Mechanical wireless keyboard for productivity',
        category: 'Electronics',
        price: 149.99,
        imageUrl: 'https://via.placeholder.com/300x200/6f42c1/ffffff?text=Keyboard',
        features: ['Mechanical Switches', 'Wireless', 'Backlit'],
        rating: 4.4,
        reviewCount: 67,
        stock: 12
      },
      {
        id: 5,
        name: 'Coffee Mug',
        description: 'Insulated travel coffee mug',
        category: 'Home',
        price: 19.99,
        imageUrl: 'https://via.placeholder.com/300x200/fd7e14/ffffff?text=Coffee+Mug',
        features: ['Insulated', 'Leak Proof', 'Dishwasher Safe'],
        rating: 4.1,
        reviewCount: 45,
        stock: 25
      },
      {
        id: 6,
        name: 'Desk Lamp',
        description: 'LED desk lamp with adjustable brightness',
        category: 'Home',
        price: 39.99,
        originalPrice: 49.99,
        imageUrl: 'https://via.placeholder.com/300x200/20c997/ffffff?text=Desk+Lamp',
        badge: 'Popular',
        features: ['LED', 'Adjustable', 'Energy Efficient'],
        rating: 4.3,
        reviewCount: 156,
        stock: 0 // Out of stock example
      }
    ];
  }
}
