import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryContactComponent } from './gallery-contact.component';

describe('GalleryContactComponent', () => {
  let component: GalleryContactComponent;
  let fixture: ComponentFixture<GalleryContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
