import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { BankerListComponent } from './pages/banker-list/banker-list.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { LoanAppListComponent } from './pages/loan-app-list/loan-app-list.component';
import { NewLoanFormComponent } from './pages/new-loan-form/new-loan-form.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'bankerList',
        component: BankerListComponent
    },
    {
        path: 'customerList',
        component: CustomerListComponent
    },
    {
        path: 'loanAppList',
        component: LoanAppListComponent
    },
    {
        path: 'newLoan',
        component: NewLoanFormComponent
    }
];
