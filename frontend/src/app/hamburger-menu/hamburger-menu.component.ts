import { Component, Output, EventEmitter } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { CommonModule } from '@angular/common'; // Important for *ngFor, NgClass etc.
import { RouterModule } from '@angular/router'; // Important for routerLink
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamburger-menu',
  standalone: true, // <--- MAKE SURE THIS IS HERE AND SET TO TRUE
  imports: [
    CommonModule, // Required for *ngFor, [ngClass] in its template
    RouterModule // Required for [routerLink] in its template
  ],
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss']
})
export class HamburgerMenuComponent {

	isOpen: boolean = false;
	@Output() menuToggled = new EventEmitter<boolean>();

	 constructor(
        private navService: NavigationService,
        private router: Router
    ) {}

get isShopRoute(): boolean {
  const path = this.router.url.split('?')[0].split('#')[0];
  return path === '/shop' || path === '/contact';
}


	toggleMenu(): void {
		this.isOpen = !this.isOpen;
		this.menuToggled.emit(this.isOpen);
		this.navService.toggleMobileNav();
	}
}
