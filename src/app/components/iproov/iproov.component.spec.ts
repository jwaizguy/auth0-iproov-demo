import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IproovComponent } from './iproov.component';

describe('IproovComponent', () => {
  let component: IproovComponent;
  let fixture: ComponentFixture<IproovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IproovComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IproovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
