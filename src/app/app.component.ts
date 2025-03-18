import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bankLoanApp';
  loggedUserData: any;
  constructor(
    private router: Router,
  ) 
  {
    
  }
  ngOnInit(){
    const loggedUser = sessionStorage.getItem("bankLoginUser");
    if (loggedUser) {
      this.loggedUserData = JSON.parse(loggedUser);
    }
  }
  onLogOut() {
    sessionStorage.removeItem('bankLoginUser');
    this.loggedUserData = null;
    this.router.navigateByUrl('/login');
  }
}
