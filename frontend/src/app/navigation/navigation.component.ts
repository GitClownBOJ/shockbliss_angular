import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for *ngFor, NgClass
import { RouterModule } from '@angular/router'; // Needed for routerLink

@Component({
  selector: 'app-navigation',
  standalone: true, // Mark as standalone
  imports: [CommonModule, RouterModule], // Import necessary modules
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  // Navigation items could be defined here if you want to make them dynamic
  navItems = [
    { text: 'Start', path: '/', class: 'button-1' },
    { text: 'Shop', href: '/shop', class: 'button-2' },
    { text: 'Contact', href: '/contact', class: 'button-3' }
  ];
}
