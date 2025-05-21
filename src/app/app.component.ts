import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // For the <router-outlet>
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component'; // Import your UI components
import { NavigationComponent } from './navigation/navigation.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { GifOverlayComponent } from './gif-overlay/gif-overlay.component';

@Component({
  selector: 'app-root',
  standalone: true, // Mark app.component as standalone
  imports: [RouterOutlet, HamburgerMenuComponent, NavigationComponent, MobileNavComponent], // Import other standalone components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ShockBliss';
}
