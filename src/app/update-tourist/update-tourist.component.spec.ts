import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTouristComponent } from './update-tourist.component';

describe('UpdateTouristComponent', () => {
  let component: UpdateTouristComponent;
  let fixture: ComponentFixture<UpdateTouristComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTouristComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTouristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
