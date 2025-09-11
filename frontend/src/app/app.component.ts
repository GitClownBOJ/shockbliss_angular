import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { RouterOutlet } from '@angular/router'; // For the <router-outlet>
import { CommonModule } from '@angular/common';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component'; // Import your UI components
import { NavigationComponent } from './navigation/navigation.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-root',
  standalone: true, // Mark app.component as standalone
  imports: [RouterOutlet, CommonModule, HamburgerMenuComponent, NavigationComponent, MobileNavComponent], // Import other standalone components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShockBliss';
    isShopRoute: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribe to router events to update isShopRoute
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isShopRoute = event.urlAfterRedirects === '/shop';
    });
  }


  onMenuToggle(isOpen: boolean) {
    console.log('Hamburger menu is now:', isOpen ? 'open' : 'closed');
    // You can add logic here to control other parts of your app based on the menu state.
    // For example, you might want to:
    // - Toggle the visibility of a side navigation menu (e.g., MobileNavComponent)
    // - Add/remove a CSS class to the body to prevent scrolling when the menu is open
    // - Perform analytics or other actions
  }
}
