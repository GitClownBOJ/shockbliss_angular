import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component'; // Ensure this component is created

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'shop', component: ShopComponent, title: 'Shop' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us' },
  { path: '**', component: NotFoundComponent, title: 'Page Not Found' }
];
