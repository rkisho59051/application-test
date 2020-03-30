import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  designation:string;
  userName:any;
  firstName:any;
  timeAvail: number = 0;
  timeAvailMin:number = 0;
  timeBreak: number = 0;
  timeBreakMin: number =0;
  total:number;
  approved:number;
  rejected:number;
  avghandlingtime:string;
  subscription:Subscription;
  constructor(private userService:UserService, private router:Router) { 
      this.userService.getUserInfo().subscribe(data=>{
        this.firstName = data.data['first_name']
        console.log('firstname ' +this.firstName);});
  
  }
  

  ngOnInit() {
    console.log('for our reference ' +this.firstName);

    // this.firstName = 'John Doe';
    // console.log(this.firstName);
    
    
      // this.userName = JSON.stringify(data.data['first_name']);
      // console.log('firstname' +this.firstName);
    //  })
      
 
  //   this.firstName = this.userName;
  //  console.log(this.userName)
    
  this.total = 150;
  this.avghandlingtime = '00:15:00';
  this.approved = 95;
  this.rejected = this.total - this.approved;
  // this.firstName = 'ABC';
  this.designation= 'Data Executive';
}

ngAfterViewInit() {
  console.log('for our reference ' +this.firstName);
}
available() {
  
  if(this.timeAvail > 0) {
    clearInterval(this.interval);
    this.timeAvail = 0;
    this.timeAvailMin = 0;
   
  } else
  this.interval = setInterval(() => {
    if(this.timeAvail < 59) {
      this.timeAvail++;
    }
    else{
      this.timeAvailMin = this.timeAvailMin + 1;
      this.timeAvail = 0;
    }
    
  },1000)
}

interval;
break() {
  if(this.timeBreak > 0) {
    clearInterval(this.interval);
    this.timeBreak = 0;
    this.timeBreakMin = 0;

  }else{
  this.interval = setInterval(() => {
    if(this.timeBreak < 59) {
      this.timeBreak++;
    }
    else{
      this.timeBreakMin = this.timeBreakMin + 1;
      this.timeBreak = 0;
    }
   
  },1000)
}
}

}
