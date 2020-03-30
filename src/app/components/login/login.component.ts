import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // firstName :string;
  model ={
    email:'',
    password:''
  }
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm)
  {
    // debugger;
    this.userService.login(form.value).subscribe(res =>{
      this.userService.setToken(res['token']);
      this.router.navigateByUrl('/dashboard');
    //    this.userService.getSubscriptionDetails().subscribe(res=>{
    //   console.log('subscription'+res);
    // })
      
      this.userService.getUserProfile().subscribe(res=>{
        this.userService.sendUserInfo(res);
        // console.log(res['data']['first_name']);
       
       
        // this.model.firstName = res[]
        // this.userService.firstName.subscribe(data => data=res['data']['first_name']);
        
        
        // this.userService.getUserName(this.firstName);
      },
      err=>{
        console.log(err);
      })
      
    },
    err=>{
      this.serverErrorMessages = err.error.message;
    })
    
  }
  //  this.userService.getSubscriptionDetails().subscribe(res=>{
  //     console.log(res);
  //   })


}
