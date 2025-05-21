import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// Application bootstrap configuration
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    // You can add other providers here, such as:
    // provideHttpClient(),
    // provideAnimations()
  ]
})
.catch(err => console.error(err));
