import { Component, OnInit } from '@angular/core';
import { PhysicalAssetService } from 'src/app/services/PhysicalAsset/physical-asset.service';
import { WorkerService } from 'src/app/services/Worker/worker.service';

@Component({
  selector: 'app-assign-physical-asset',
  templateUrl: './assign-physical-asset.component.html',
  styleUrls: ['./assign-physical-asset.component.css']
})
export class AssignPhysicalAssetComponent implements OnInit {

  workers: any;
  physicalAssets: any;
  assignAssetsWorker = {
    "worker": {
      "id": 0
    },
    "physicalAsset": {
      "id": 0
    },
    "date": new Date()
  }
  error = false;
  submitted = false;

  constructor(
    public physicalAssetService: PhysicalAssetService,
    public workerService: WorkerService
  ) { }

  ngOnInit(): void {
    this.retrieveWorkers();
    this.retrievePhysicalAsset();
  }

  retrieveWorkers(): void {
    this.workerService.getAll()
      .subscribe(
        data => {
          this.workers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
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

  saveAssignWorkerToAsset(): void {
    const data = {
      "worker": {
        "id": this.assignAssetsWorker.worker.id
      },
      "physicalAsset": {
        "id": this.assignAssetsWorker.physicalAsset.id
      },
      "date": this.assignAssetsWorker.date
    };

    if (!data.worker.id || !data.physicalAsset.id || !data.date) {
      this.error = true;
      return;
    }
    this.error = false;

    this.physicalAssetService.assignWorker(data)
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
}
