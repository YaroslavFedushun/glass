import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassStairsComponent } from './glass-stairs.component';

describe('GlassStairsComponent', () => {
  let component: GlassStairsComponent;
  let fixture: ComponentFixture<GlassStairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassStairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassStairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
