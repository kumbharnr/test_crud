import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table1dataComponent } from './table1data.component';

describe('Table1dataComponent', () => {
  let component: Table1dataComponent;
  let fixture: ComponentFixture<Table1dataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Table1dataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Table1dataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
