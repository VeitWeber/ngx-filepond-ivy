import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFilepondIvyComponent } from './ngx-filepond-ivy.component';

describe('NgxFilepondIvyComponent', () => {
  let component: NgxFilepondIvyComponent;
  let fixture: ComponentFixture<NgxFilepondIvyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFilepondIvyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFilepondIvyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
