import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShNavComponent } from './sh-nav.component';

describe('ShNavComponent', () => {
  let component: ShNavComponent;
  let fixture: ComponentFixture<ShNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
