import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, LineSeriesService, TooltipService, LegendService } from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [DateTimeService, LineSeriesService, TooltipService, LegendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
