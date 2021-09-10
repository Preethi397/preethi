import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavitemsComponent } from './navitems/navitems.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavitemsComponent,
    TransactionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
     {
        path: "login",component:LoginComponent
      },
      {
        path: "dashboard", component:DashboardComponent
      },
      {
        path: "transaction", component: TransactionComponent
      },
      
      {
        path: "", component:LoginComponent
      },

    ])],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
