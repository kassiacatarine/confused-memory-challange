import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfusedMemoryComponent } from './confused-memory.component';

describe('ConfusedMemoryComponent', () => {
  let component: ConfusedMemoryComponent;
  let fixture: ComponentFixture<ConfusedMemoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfusedMemoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfusedMemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
