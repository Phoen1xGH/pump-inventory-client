import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpListingComponent } from './pump-listing.component';

describe('PumpListingComponent', () => {
  let component: PumpListingComponent;
  let fixture: ComponentFixture<PumpListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PumpListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PumpListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
