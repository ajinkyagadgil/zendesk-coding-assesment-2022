import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material/material.module';
import {HttpClientModule} from '@angular/common/http'
import { AppconfigService } from './appconfig.service';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    // ToastrModule.forRoot()
  ],
  providers: [
    AppconfigService,
    {
      provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppconfigService], multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

function initConfig(config: AppconfigService){
  return () => config.loadAppConfig()
}
