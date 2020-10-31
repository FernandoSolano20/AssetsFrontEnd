import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListWorkerComponent } from './components/worker/list-worker/list-worker.component';
import { AddWorkerComponent } from './components/worker/add-worker/add-worker.component';
import { DetailWorkerComponent } from './components/worker/detail-worker/detail-worker.component';

@NgModule({
  declarations: [
    AppComponent,
    ListWorkerComponent,
    AddWorkerComponent,
    DetailWorkerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
