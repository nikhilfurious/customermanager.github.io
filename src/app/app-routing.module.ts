import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'detail/:id', component: CustomerDetailsComponent },
  { path: 'about-me' , component: AboutMeComponent }
];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ], 
    exports : [ RouterModule ]
})

export class AppRoutingModule { }
