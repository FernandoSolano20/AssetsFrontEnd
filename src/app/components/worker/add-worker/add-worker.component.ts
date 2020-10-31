import { Component, OnInit } from '@angular/core';
import { WorkerService } from 'src/app/services/Worker/worker.service';

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  worker = {
    id: 0,
    name: '',
    lastName: '',
    birthday: new Date(),
    state: 0
  };
  submitted = false;
  error = false;

  constructor(private workerService: WorkerService) { }

  ngOnInit(): void {
  }

  saveWorker(): void {
    const data = {
      name: this.worker.name,
      lastName: this.worker.lastName,
      birthday: this.worker.birthday,
      state: this.worker.state
    };

    this.workerService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newWorker(): void {
    this.submitted = false;
    this.worker = {
      id: 0,
      name: '',
      lastName: '',
      birthday: new Date(),
      state: 0
    };
  }
}
