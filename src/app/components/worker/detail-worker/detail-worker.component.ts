import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkerService } from 'src/app/services/Worker/worker.service';

@Component({
  selector: 'app-detail-worker',
  templateUrl: './detail-worker.component.html',
  styleUrls: ['./detail-worker.component.css']
})
export class DetailWorkerComponent implements OnInit {

  currentWorker = null;
  message = '';
  error = false;

  constructor(
    private workerService: WorkerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.message = '';
    this.getWorker(this.route.snapshot.paramMap.get('id'));
  }

  getWorker(id): void {
    this.workerService.get(id)
      .subscribe(
        data => {
          this.currentWorker = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateWorker(): void {
    this.error = false;

    if (!this.currentWorker.name || !this.currentWorker.lastName || !this.currentWorker.birthday || !this.currentWorker.state) {
      this.error = true;
      return;
    }
    this.error = false;
    
    this.workerService.update(this.currentWorker.id, this.currentWorker)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'El trabajador fue actualizado!';
        },
        error => {
          console.log(error);
        });
  }

  deleteWorker(): void {
    this.workerService.delete(this.currentWorker.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/workers']);
        },
        error => {
          console.log(error);
        });
  }
}
