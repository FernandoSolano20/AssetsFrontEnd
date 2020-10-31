import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssetService } from 'src/app/services/Asset/asset.service';

@Component({
  selector: 'app-detail-asset',
  templateUrl: './detail-asset.component.html',
  styleUrls: ['./detail-asset.component.css']
})
export class DetailAssetComponent implements OnInit {

  currentAsset = null;
  message = '';
  error = false;

  constructor(
    private assetService: AssetService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getAsset(this.route.snapshot.paramMap.get('id'));
  }

  getAsset(id): void {
    this.assetService.get(id)
      .subscribe(
        data => {
          this.currentAsset = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateAsset(): void {
    this.error = false;
    this.assetService.update(this.currentAsset.id, this.currentAsset)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'El trabajador fue actualizado!';
        },
        error => {
          console.log(error);
        });
  }

  deleteAsset(): void {
    this.assetService.delete(this.currentAsset.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/assets']);
        },
        error => {
          console.log(error);
        });
  }
}
