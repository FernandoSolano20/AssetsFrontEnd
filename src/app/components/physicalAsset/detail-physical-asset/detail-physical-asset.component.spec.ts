import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPhysicalAssetComponent } from './detail-physical-asset.component';

describe('DetailPhysicalAssetComponent', () => {
  let component: DetailPhysicalAssetComponent;
  let fixture: ComponentFixture<DetailPhysicalAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPhysicalAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPhysicalAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
