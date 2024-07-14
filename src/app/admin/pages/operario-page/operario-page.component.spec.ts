import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperarioPageComponent} from './operario-page.component';

describe('OperarioComponent', () => {
  let component: OperarioPageComponent;
  let fixture: ComponentFixture<OperarioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperarioPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
