import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorDataFormComponent } from './sensor-data-form.component';

describe('SensorDataFormComponent', () => {
  let component: SensorDataFormComponent;
  let fixture: ComponentFixture<SensorDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
