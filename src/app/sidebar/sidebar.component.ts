import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationService } from '../services/navigation.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
	
	isActive: boolean = false;
  	isRootPage: boolean = true;

	navItems = [
    { text: 'Start', path: '/' },
    { text: 'Shop', href: '/shop' },
    { text: 'Contact', href: '/contact' }
  ];

  constructor(
    private navService: NavigationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Subscribe to router events to update isRootPage
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isRootPage = event.url === '/';
    });

    // Set initial state
    this.isRootPage = this.router.url === '/';
  }

  // Add the missing isCurrentRoute method
  isCurrentRoute(href: string): boolean {
    return this.router.url === href;
  }

  // Method to toggle sidebar (if needed)
  toggleSidebar(): void {
    this.isActive = !this.isActive;
  }
}
