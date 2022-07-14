import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RequerimientoGateway } from './domain/models/requerimiento/gateway/requerimiento-gateway';
import { RequerimientoApiService } from './infraestructure/driven-adapter/requerimiento-api/requerimiento-api.service';
import { RequerimientoComponent } from './ui/view-models/requerimiento/requerimiento.component';
import { CircularProgressIndicatorComponent } from './ui/common/circular-progress-indicator/circular-progress-indicator.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RequerimientoComponent,
    CircularProgressIndicatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [{provide: RequerimientoGateway, useClass: RequerimientoApiService}],
  bootstrap: [AppComponent],
})
export class AppModule { }
