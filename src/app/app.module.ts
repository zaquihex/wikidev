import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgCounterActionsComponent } from './angular/ng-counterActions.component';
import {ReactCounterComponent} from './angular/react-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactCounterComponent,
    NgCounterActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
