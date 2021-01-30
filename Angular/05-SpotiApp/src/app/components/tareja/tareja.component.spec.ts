import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarejaComponent } from './tareja.component';

describe('TarejaComponent', () => {
  let component: TarejaComponent;
  let fixture: ComponentFixture<TarejaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarejaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
