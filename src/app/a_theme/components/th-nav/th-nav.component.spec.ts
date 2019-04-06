import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThNavComponent } from './th-nav.component';

describe('ThNavComponent', () => {
  let component: ThNavComponent;
  let fixture: ComponentFixture<ThNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
