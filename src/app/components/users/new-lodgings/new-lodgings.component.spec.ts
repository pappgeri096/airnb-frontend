import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLodgingsComponent } from './new-lodgings.component';

describe('NewLodgingsComponent', () => {
  let component: NewLodgingsComponent;
  let fixture: ComponentFixture<NewLodgingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLodgingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLodgingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
