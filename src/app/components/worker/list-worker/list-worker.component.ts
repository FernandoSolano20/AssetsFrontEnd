import { Component, OnInit } from '@angular/core';
import { WorkerService } from 'src/app/services/Worker/worker.service';

@Component({
  selector: 'app-list-worker',
  templateUrl: './list-worker.component.html',
  styleUrls: ['./list-worker.component.css']
})
export class ListWorkerComponent implements OnInit {

  workers: any;
  currentWorker = null;
  currentIndex = -1;
  name = '';

  constructor(public workerService : WorkerService) { }

  ngOnInit(): void {
    this.retrieveWorkers();
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

  refreshList(): void {
    this.retrieveWorkers();
    this.currentWorker = null;
    this.currentIndex = -1;
  }

  setActiveWorkers(worker, index): void {
    this.currentWorker = worker;
    this.currentIndex = index;
  }

}
