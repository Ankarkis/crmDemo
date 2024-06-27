import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinariaPageComponent } from './maquinaria-page.component';

describe('TablesComponent', () => {
  let component: MaquinariaPageComponent;
  let fixture: ComponentFixture<MaquinariaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaquinariaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaquinariaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
