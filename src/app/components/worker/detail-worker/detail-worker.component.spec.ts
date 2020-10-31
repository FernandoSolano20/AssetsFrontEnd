import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailWorkerComponent } from './detail-worker.component';

describe('DetailWorkerComponent', () => {
  let component: DetailWorkerComponent;
  let fixture: ComponentFixture<DetailWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailWorkerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
