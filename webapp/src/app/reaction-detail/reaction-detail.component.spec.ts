import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionDetailComponent } from './reaction-detail.component';

describe('ReactionDetailComponent', () => {
  let component: ReactionDetailComponent;
  let fixture: ComponentFixture<ReactionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactionDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
