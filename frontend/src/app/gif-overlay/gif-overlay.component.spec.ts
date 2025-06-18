import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifOverlayComponent } from './gif-overlay.component';

describe('GifOverlayComponent', () => {
  let component: GifOverlayComponent;
  let fixture: ComponentFixture<GifOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
