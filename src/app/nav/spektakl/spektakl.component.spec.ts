import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpektaklComponent } from './spektakl.component';

describe('SpektaklComponent', () => {
  let component: SpektaklComponent;
  let fixture: ComponentFixture<SpektaklComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpektaklComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpektaklComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
