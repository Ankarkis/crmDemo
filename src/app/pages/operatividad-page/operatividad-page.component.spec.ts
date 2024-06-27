import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatividadPageComponent } from './operatividad-page.component';

describe('OperatividadPageComponent', () => {
  let component: OperatividadPageComponent;
  let fixture: ComponentFixture<OperatividadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatividadPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatividadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
