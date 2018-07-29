import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaCardComponent } from './arena-card.component';

describe('ArenaCardComponent', () => {
  let component: ArenaCardComponent;
  let fixture: ComponentFixture<ArenaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArenaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
