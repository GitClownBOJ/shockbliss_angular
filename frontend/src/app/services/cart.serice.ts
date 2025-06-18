import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Product } from '../pages/shop/shop.component';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'http://localhost:8080/api'; // Adjust to match your Go backend URL
  
  // Using BehaviorSubject to manage cart state
  private cartSubject = new BehaviorSubject<Cart>({
    items: [],
    totalItems: 0,
    totalAmount: 0
  });
  
  // Observable that components can subscribe to
  public cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {
    // Load cart from localStorage on service initialization
    this.loadCartFromStorage();
  }

  // Get current cart state
  getCurrentCart(): Cart {
    return this.cartSubject.value;
  }

  // Add product to cart
  addToCart(product: Product, quantity: number = 1): Observable<any> {
    const currentCart = this.getCurrentCart();
    const existingItemIndex = currentCart.items.findIndex(item => item.product.id === product.id);

    if (existingItemIndex > -1) {
      // Product already exists, increase quantity
      currentCart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new product to cart
      currentCart.items.push({ product, quantity });
    }

    this.updateCartTotals(currentCart);
    this.saveCartToStorage(currentCart);
    this.cartSubject.next(currentCart);

    // For now, return a successful observable. 
    // Replace with actual HTTP call when backend is ready:
    return of({ success: true });
    // return this.http.post(`${this.apiUrl}/cart/add`, { productId: product.id, quantity });
  }

  removeFromCart(productId: number): Observable<any> {
    const currentCart = this.getCurrentCart();
    currentCart.items = currentCart.items.filter(item => item.product.id !== productId);

    this.updateCartTotals(currentCart);
    this.saveCartToStorage(currentCart);
    this.cartSubject.next(currentCart);

    return of({ success: true });
    // return this.http.delete(`${this.apiUrl}/cart/remove/${productId}`);
  }

  updateQuantity(productId: number, quantity: number): Observable<any> {
    if (quantity <= 0) {
      return this.removeFromCart(productId);
    }

    const currentCart = this.getCurrentCart();
    const itemIndex = currentCart.items.findIndex(item => item.product.id === productId);

    if (itemIndex > -1) {
      currentCart.items[itemIndex].quantity = quantity;
      this.updateCartTotals(currentCart);
      this.saveCartToStorage(currentCart);
      this.cartSubject.next(currentCart);
    }

    return of({ success: true });
    // return this.http.put(`${this.apiUrl}/cart/update`, { productId, quantity });
  }

  clearCart(): Observable<any> {
    const emptyCart: Cart = {
      items: [],
      totalItems: 0,
      totalAmount: 0
    };

    this.saveCartToStorage(emptyCart);
    this.cartSubject.next(emptyCart);

    return of({ success: true });

    // Uncomment when backend is ready:
    // return this.http.delete(`${this.apiUrl}/cart/clear`);
  }

  getCartItemCount(): Observable<number> {
    return new Observable(observer => {
      this.cart$.subscribe(cart => {
        observer.next(cart.totalItems);
      });
    });
  }

  // Private helper methods
  private updateCartTotals(cart: Cart): void {
    cart.totalItems = cart.items.reduce((total, item) => total + item.quantity, 0);
    cart.totalAmount = cart.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  private saveCartToStorage(cart: Cart): void {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
  }

  private loadCartFromStorage(): void {
    const savedCart = localStorage.getItem('shopping_cart');
    if (savedCart) {
      try {
        const cart: Cart = JSON.parse(savedCart);
        this.cartSubject.next(cart);
      } catch (error) {
        console.error('Error loading cart from storage:', error);
        // If there's an error parsing, start with empty cart
        this.clearCart();
      }
    }
  }
}
