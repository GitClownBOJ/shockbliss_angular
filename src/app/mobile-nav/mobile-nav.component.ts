import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'; // <-- ADD THIS IMPORT FOR 'Router'
import { CommonModule } from '@angular/common'; // <-- ADD THIS IMPORT FOR 'CommonModule'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit, OnDestroy {
  isActive = false;
  private subscription: Subscription | undefined;
  
  // Navigation items could be defined here if you want to make them dynamic
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
    this.subscription = this.navService.mobileNavState.subscribe(
      state => this.isActive = state
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  navigateAndClose(path: string): void {
    this.router.navigate([path]).then(() => {
      this.navService.closeMobileNav();
    });
  }

  close(): void {
    this.navService.closeMobileNav();
  }
}
