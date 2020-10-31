import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAssetComponent } from './components/asset/add-asset/add-asset.component';
import { DetailAssetComponent } from './components/asset/detail-asset/detail-asset.component';
import { ListAssetComponent } from './components/asset/list-asset/list-asset.component';
import { AddWorkerComponent } from './components/worker/add-worker/add-worker.component';
import { DetailWorkerComponent } from './components/worker/detail-worker/detail-worker.component';
import { ListWorkerComponent } from './components/worker/list-worker/list-worker.component';

const routes: Routes = [
  { path: '', redirectTo: 'workers', pathMatch: 'full' },
  { path: 'workers/add', component: AddWorkerComponent },
  { path: 'workers', component: ListWorkerComponent },
  { path: 'workers/:id', component: DetailWorkerComponent },
  { path: 'assets/add', component: AddAssetComponent },
  { path: 'assets', component: ListAssetComponent },
  { path: 'assets/:id', component: DetailAssetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
