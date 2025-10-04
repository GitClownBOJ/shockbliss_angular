import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NavigationComponent } from '../../navigation/navigation.component';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    SidebarComponent,
    CommonModule,
    CurrencyPipe,
    NavigationComponent,
    RouterLink
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{

  isShopRoute: boolean = false;

  founders = [
    {
      name: 'Inka Parviainen',
      title: 'Tech Wizard',
      image: 'portrait1.jpg',
      bio: `Inka designs creative user experiences and manages all IT. Passionate about making memorable products.`,
      email: 'inka@bittiviidakon.fi',
      phone: '+358 45 78314113'
    },
    {
      name: 'Ani Parviainen',
      title: 'Artistic Talent',
      image: 'assets/images/founder2.jpg',
      bio: `Ani is responsible of making the magical products reality. She is the genius behind the concept.`,
      email: 'aninka@shockbliss.com',
      phone: '+358 50 765 4321'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // ensure same menu placement for /shop and /contact
    this.isShopRoute = this.router.url === '/shop' || this.router.url === '/contact';

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      this.isShopRoute = (url === '/shop' || url === '/contact');
    });
  }

  onMenuToggle(isOpen: boolean) {
    console.log('Hamburger menu is now:', isOpen ? 'open' : 'closed');
  }


  // ...existing code...
}
