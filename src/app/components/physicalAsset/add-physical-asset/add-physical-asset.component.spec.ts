import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhysicalAssetComponent } from './add-physical-asset.component';

describe('AddPhysicalAssetComponent', () => {
  let component: AddPhysicalAssetComponent;
  let fixture: ComponentFixture<AddPhysicalAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhysicalAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhysicalAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
