import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/services/Asset/asset.service';
import { PhysicalAssetService } from 'src/app/services/PhysicalAsset/physical-asset.service';

@Component({
  selector: 'app-add-physical-asset',
  templateUrl: './add-physical-asset.component.html',
  styleUrls: ['./add-physical-asset.component.css']
})
export class AddPhysicalAssetComponent implements OnInit {

  physicalAsset = {
    id: 0,
    name: '',
    description: '',
    year: '',
    quantity: 0,
    assignedAssets: 0,
    state: 0,
    assetId: {
      id: 0
    }
  };
  submitted = false;
  error = false;
  assets: any;

  constructor(
    private physicalAssetService: PhysicalAssetService,
    private assetService: AssetService) { }

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

  savePhysicalAsset(): void {
    const data = {
      name: this.physicalAsset.name,
      description: this.physicalAsset.description,
      year: this.physicalAsset.year,
      quantity: this.physicalAsset.quantity,
      assignedAssets: this.physicalAsset.assignedAssets,
      state: this.physicalAsset.state,
      assetId: {
        id: this.physicalAsset.assetId.id
      }
    };

    if (!data.name || !data.description || !data.year || !data.quantity || !data.state || !data.state || !data.assetId.id) {
      this.error = true;
      return;
    }
    this.error = false;

    this.physicalAssetService.create(data)
      .subscribe(
        response => {
          console.log(response);
          if (!response) {
            this.error = true;
            return;
          }
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPhysicalAsset(): void {
    this.submitted = false;
    this.physicalAsset = {
      id: 0,
      name: '',
      description: '',
      year: '',
      quantity: 0,
      assignedAssets: 0,
      state: 0,
      assetId: {
        id: 0
      }
    };
  }
}
