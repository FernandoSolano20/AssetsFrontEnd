import { Component, OnInit } from '@angular/core';
import { AssetService } from 'src/app/services/Asset/asset.service';

@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent implements OnInit {

  asset = {
    id: 0,
    name: '',
    description: '',
    state: 0
  };
  submitted = false;
  error = false;

  constructor(private assetService: AssetService) { }

  ngOnInit(): void {
  }

  saveAsset(): void {
    const data = {
      name: this.asset.name,
      description: this.asset.description,
      state: this.asset.state
    };

    if(!data.name || !data.description || !data.state){
      this.error = true;
      return;
    }
    this.error = false;
    
    this.assetService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newAsset(): void {
    this.submitted = false;
    this.asset = {
      id: 0,
      name: '',
      description: '',
      state: 0
    };
  }
}
