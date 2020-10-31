import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPhysicalAssetComponent } from './assign-physical-asset.component';

describe('AssignPhysicalAssetComponent', () => {
  let component: AssignPhysicalAssetComponent;
  let fixture: ComponentFixture<AssignPhysicalAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignPhysicalAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPhysicalAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
