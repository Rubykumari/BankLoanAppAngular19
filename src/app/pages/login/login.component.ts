import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  showRegisterationForm: boolean = false;
  httpClient = inject(HttpClient);
  router = inject(Router);
  // isUserLoggedIn :boolean = false;
  customerRegisterationObj: any = {
    "userId": 0,
    "userName": "",
    "emailId": "",
    "fullName": "",
    "password": ""
  }
  loginRectiveObj: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })
  changeView() {
    this.showRegisterationForm = !this.showRegisterationForm;
  }
  onRegister() {
    this.httpClient.post('https://projectapi.gerasim.in/api/BankLoan/RegisterCustomer', this.customerRegisterationObj).subscribe((res: any) => {
      if (res.result) {
        alert('Customer Registration Successfully')
      }
      else {
        alert(res.message);
      }
    })
  }
  onLogin(){
    const formValue = this.loginRectiveObj.value
    this.httpClient.post('https://projectapi.gerasim.in/api/BankLoan/login', formValue).subscribe((res:any)=>{
      if(res.result){
        sessionStorage.setItem('bankLoginUser', JSON.stringify(res.data));
        this.router.navigateByUrl('/loanAppList').then(() => {
          window.location.reload();
        });
        // this.router.navigateByUrl('/loanAppList');
        // window.location.reload();
      }
      else{
        alert(res.message)
      }
    })
  }
}
