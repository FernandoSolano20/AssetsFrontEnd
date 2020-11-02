import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from 'src/app/services/Asset/asset.service';
import { PhysicalAssetService } from 'src/app/services/PhysicalAsset/physical-asset.service';

@Component({
  selector: 'app-detail-physical-asset',
  templateUrl: './detail-physical-asset.component.html',
  styleUrls: ['./detail-physical-asset.component.css']
})
export class DetailPhysicalAssetComponent implements OnInit {

  currentPhysicalAsset = null;
  message = '';
  messageError = '';
  error = false;
  assets: any;

  constructor(
    private physicalAssetService: PhysicalAssetService,
    private assetService: AssetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getPhysicalAsset(this.route.snapshot.paramMap.get('id'));
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

  getPhysicalAsset(id): void {
    this.physicalAssetService.get(id)
      .subscribe(
        data => {
          this.currentPhysicalAsset = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePhysicalAsset(): void {

    if (!this.currentPhysicalAsset.name || !this.currentPhysicalAsset.description 
      || !this.currentPhysicalAsset.year || !this.currentPhysicalAsset.quantity 
      || !this.currentPhysicalAsset.state || !this.currentPhysicalAsset.state 
      || !this.currentPhysicalAsset.assetId.id) {
      this.error = true;
      return;
    }
    this.error = false;

    this.physicalAssetService.update(this.currentPhysicalAsset.id, this.currentPhysicalAsset)
      .subscribe(
        response => {
          console.log(response);
          if(!response){
            this.error = true;
            return;
          }
          this.message = 'El activo fisico fue actualizado!';
        },
        error => {
          console.log(error);
          error = true;
          this.messageError = 'Error con la activacion del tipo de activo';
        });
  }

  deletePhysicalAsset(): void {
    this.physicalAssetService.delete(this.currentPhysicalAsset.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/physicalAssets']);
        },
        error => {
          console.log(error);
        });
  }
}
