import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private mobileNavVisibleSubject = new BehaviorSubject<boolean>(false);
  public mobileNavState: Observable<boolean> = this.mobileNavVisibleSubject.asObservable();

  toggleMobileNav(): void {
    this.mobileNavVisibleSubject.next(!this.mobileNavVisibleSubject.value);
  }

  closeMobileNav(): void {
    this.mobileNavVisibleSubject.next(false);
  }
}
