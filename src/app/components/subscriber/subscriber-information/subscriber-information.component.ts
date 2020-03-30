import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscriber-information',
  templateUrl: './subscriber-information.component.html',
  styleUrls: ['./subscriber-information.component.css']
})
export class SubscriberInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.interval = setInterval(() => {
      if(this.timeSec > 0 && this.timeMin >= 0) {
        this.timeSec--;
      }
      else {
       
        if(this.timeMin>0)
        {
        this.timeMin = this.timeMin -1;
        this.timeSec = 59;
        }
        else{
          if(confirm('Time over, Click ok to continue')){
          this.timeMin = 14;
          this.timeSec = 59;
          }
          return false;
        }
      
      }
      
    },1000)
  }
  timeMin: number = 14;
timeSec: number = 59;
interval;

}
