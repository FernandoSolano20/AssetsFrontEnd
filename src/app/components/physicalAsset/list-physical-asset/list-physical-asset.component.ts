import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/services/Asset/asset.service';
import { PhysicalAssetService } from 'src/app/services/PhysicalAsset/physical-asset.service';

@Component({
  selector: 'app-list-physical-asset',
  templateUrl: './list-physical-asset.component.html',
  styleUrls: ['./list-physical-asset.component.css']
})
export class ListPhysicalAssetComponent implements OnInit {

  physicalAssets: any;
  currentPhysicalAsset = null;
  currentIndex = -1;
  name = '';

  constructor(
    public physicalAssetService : PhysicalAssetService,
    private assetService: AssetService) { }

  ngOnInit(): void {
    this.retrievePhysicalAsset();
  }

  retrievePhysicalAsset(): void {
    this.physicalAssetService.getAll()
      .subscribe(
        data => {
          this.physicalAssets = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePhysicalAsset();
    this.currentPhysicalAsset = null;
    this.currentIndex = -1;
  }

  setActivePhysicalAsset(physicalAsset, index): void {
    this.assetService.get(physicalAsset.assetId.id)
    .subscribe(
      data => {
        physicalAsset.asset = data.name;
      },
      error => {
        console.log(error);
      }
    );
    this.currentPhysicalAsset = physicalAsset;
    this.currentIndex = index;
  }
}
