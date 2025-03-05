import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
   showRegisterationForm: boolean = false;

   changeView(){
    // debugger;
    this.showRegisterationForm = !this.showRegisterationForm;
   }
}
