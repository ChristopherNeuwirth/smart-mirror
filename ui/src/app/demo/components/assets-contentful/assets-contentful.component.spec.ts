import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsContentfulComponent } from './assets-contentful.component';

describe('AssetsContentfulComponent', () => {
  let component: AssetsContentfulComponent;
  let fixture: ComponentFixture<AssetsContentfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetsContentfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetsContentfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
