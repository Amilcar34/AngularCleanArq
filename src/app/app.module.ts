import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RequerimientoGateway } from './domain/models/requerimiento/gateway/requerimiento-gateway';
import { RequerimientoApiService } from './infraestructure/driven-adapter/requerimiento-api/requerimiento-api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: RequerimientoGateway, useClass: RequerimientoApiService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
