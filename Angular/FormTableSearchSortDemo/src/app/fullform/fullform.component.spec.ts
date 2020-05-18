import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullformComponent } from './fullform.component';

describe('FullformComponent', () => {
  let component: FullformComponent;
  let fixture: ComponentFixture<FullformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
