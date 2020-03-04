import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesItemsComponent } from './movies-items.component';

describe('MoviesItemsComponent', () => {
  let component: MoviesItemsComponent;
  let fixture: ComponentFixture<MoviesItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
