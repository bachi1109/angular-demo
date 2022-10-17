import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMdComponent } from './dashboard-md.component';

describe('DashboardMdComponent', () => {
  let component: DashboardMdComponent;
  let fixture: ComponentFixture<DashboardMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
