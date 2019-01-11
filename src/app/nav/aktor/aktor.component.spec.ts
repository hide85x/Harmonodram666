import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AktorComponent } from './aktor.component';

describe('AktorComponent', () => {
  let component: AktorComponent;
  let fixture: ComponentFixture<AktorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AktorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AktorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
