import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListWorkerComponent } from './components/worker/list-worker/list-worker.component';
import { AddWorkerComponent } from './components/worker/add-worker/add-worker.component';
import { DetailWorkerComponent } from './components/worker/detail-worker/detail-worker.component';
import { ListAssetComponent } from './components/asset/list-asset/list-asset.component';
import { AddAssetComponent } from './components/asset/add-asset/add-asset.component';
import { DetailAssetComponent } from './components/asset/detail-asset/detail-asset.component';
import { ListPhysicalAssetComponent } from './components/PhysicalAsset/list-physical-asset/list-physical-asset.component';
import { AddPhysicalAssetComponent } from './components/physicalAsset/add-physical-asset/add-physical-asset.component';
import { DetailPhysicalAssetComponent } from './components/physicalAsset/detail-physical-asset/detail-physical-asset.component';
import { AssignPhysicalAssetComponent } from './components/physicalAsset/assign-physical-asset/assign-physical-asset.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListWorkerComponent,
    AddWorkerComponent,
    DetailWorkerComponent,
    ListAssetComponent,
    AddAssetComponent,
    DetailAssetComponent,
    ListPhysicalAssetComponent,
    AddPhysicalAssetComponent,
    DetailPhysicalAssetComponent,
    AssignPhysicalAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
