import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhysicalAssetComponent } from './list-physical-asset.component';

describe('ListPhysicalAssetComponent', () => {
  let component: ListPhysicalAssetComponent;
  let fixture: ComponentFixture<ListPhysicalAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPhysicalAssetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhysicalAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
