import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OrderPlacingComponent } from './order-placing/order-placing.component';
import { NavItemsComponent } from './nav-items/nav-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderPlacingComponent,
    NavItemsComponent,
    DashboardComponent,
    DetailsComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "order-placing", component: OrderPlacingComponent
      },
      {
        path: "details",component:DetailsComponent
      },
      {
        path: "dashboard", component: DashboardComponent
      },
      {
        path: "portfolio", component: PortfolioComponent
      },



    ])],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
