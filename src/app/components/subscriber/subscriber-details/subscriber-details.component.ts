import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-subscriber-details',
  templateUrl: './subscriber-details.component.html',
  styleUrls: ['./subscriber-details.component.css']
})
export class SubscriberDetailsComponent implements OnInit {

  connectionType:string;
  customerType:string;
  newMobileNumber:number;
  lastFiveDigits:number;
  constructor(private userService:UserService) { }

  ngOnInit() {
    // this.userService.getSubscriptionDetails().subscribe(res=>{
    //   console.log(res);
    // })
    this.connectionType = 'Prepaid',
    this.customerType = 'Individual',
    this.newMobileNumber = 9748473839,
    this.lastFiveDigits = 84748
  }

}
