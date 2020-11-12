import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalLayoutComponent } from '../components/global-layout.component';

describe('AdminLayoutComponent', () => {
  let component: GlobalLayoutComponent;
  let fixture: ComponentFixture<GlobalLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
