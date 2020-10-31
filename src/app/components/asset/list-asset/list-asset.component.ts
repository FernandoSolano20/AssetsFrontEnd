import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/services/Asset/asset.service';

@Component({
  selector: 'app-list-asset',
  templateUrl: './list-asset.component.html',
  styleUrls: ['./list-asset.component.css']
})
export class ListAssetComponent implements OnInit {

  assets: any;
  currentAsset = null;
  currentIndex = -1;
  name = '';

  constructor(public assetService : AssetService) { }

  ngOnInit(): void {
    this.retrieveAssets();
  }

  retrieveAssets(): void {
    this.assetService.getAll()
      .subscribe(
        data => {
          this.assets = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveAssets();
    this.currentAsset = null;
    this.currentIndex = -1;
  }

  setActiveAssets(asset, index): void {
    this.currentAsset = asset;
    this.currentIndex = index;
  }
}
