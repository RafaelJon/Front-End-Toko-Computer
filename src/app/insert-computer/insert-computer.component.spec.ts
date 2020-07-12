import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertComputerComponent } from './insert-computer.component';

describe('InsertComputerComponent', () => {
  let component: InsertComputerComponent;
  let fixture: ComponentFixture<InsertComputerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertComputerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
