import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedeleteComponent } from './updatedelete.component';

describe('UpdatedeleteComponent', () => {
  let component: UpdatedeleteComponent;
  let fixture: ComponentFixture<UpdatedeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
