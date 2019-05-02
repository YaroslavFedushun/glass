import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassShowersComponent } from './glass-showers.component';

describe('GlassShowersComponent', () => {
  let component: GlassShowersComponent;
  let fixture: ComponentFixture<GlassShowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassShowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassShowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
