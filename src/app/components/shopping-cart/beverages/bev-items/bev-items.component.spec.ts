import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevItemsComponent } from './bev-items.component';

describe('BevItemsComponent', () => {
  let component: BevItemsComponent;
  let fixture: ComponentFixture<BevItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BevItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BevItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
