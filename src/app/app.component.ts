import { Component } from '@angular/core';
import { UserService } from './shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application';
  constructor(private userService:UserService, private router:Router) { }
  userLogin() {
    if(this.userService.isLoggedIn()){
      this.router.navigate(['/dashboard']);
    }
    else{
      this.router.navigate(['/login']);
    }
    
  }
  howItWorks() {
    this.router.navigate(['/howItWorks']);
  }
}
