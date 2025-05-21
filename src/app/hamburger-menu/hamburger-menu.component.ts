import { Component } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { CommonModule } from '@angular/common'; // Important for *ngFor, NgClass etc.
import { RouterModule } from '@angular/router'; // Important for routerLink

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
	constructor(private navService: NavigationService) {}

	toggleMobileNav(): void {
		this.navService.toggleMobileNav();
	}
}
