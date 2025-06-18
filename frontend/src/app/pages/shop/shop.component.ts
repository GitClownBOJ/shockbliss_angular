import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NavigationComponent } from '../../navigation/navigation.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

// simple interface for a product
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    SidebarComponent,
    CommonModule,
    CurrencyPipe,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: Product[] = []; // array to hold products

  constructor() { } // inject services here later

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = [
      {
        id: 1,
        name: 'Aninka Action Vest',
        description: 'Anywhere you go.',
        price: 199.00,
        imageUrl: '',
        category: 'Handmade Gear'
      },
      {
        id: 2,
        name: 'Shockbliss Sticker 5x10 cm',
        description: 'From mystical maid collection.',
        price: 10.00,
        imageUrl: '',
        category: 'Stickers'
      },
      {
        id: 3,
        name: 'Abstract Sticker According to Your Wish',
        description: 'Durable UV print',
        price: 20.00,
        imageUrl: '',
        category: 'Custom Stickers'
      }
    ];
  }

  addToCart(product: Product): void {
    console.log(`Added ${product.name} to cart!`);
  }
}
