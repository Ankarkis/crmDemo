import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinariasOperadorComponent } from './maquinarias-operador.component';

describe('MaquinariasOperadorComponent', () => {
  let component: MaquinariasOperadorComponent;
  let fixture: ComponentFixture<MaquinariasOperadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaquinariasOperadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaquinariasOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
