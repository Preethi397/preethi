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
import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavitemsComponent,
    TransactionComponent,
    HeaderComponent,
    DropdownComponent
  ],
  imports: [
    HttpClientModule,
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
  
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
