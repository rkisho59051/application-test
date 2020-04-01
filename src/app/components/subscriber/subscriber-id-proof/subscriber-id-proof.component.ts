import { Component, OnInit, ElementRef } from '@angular/core';

// declare var $:any;

@Component({
  selector: 'app-subscriber-id-proof',
  templateUrl: './subscriber-id-proof.component.html',
  styleUrls: ['./subscriber-id-proof.component.css']
})
export class SubscriberIdProofComponent implements OnInit {
  frontWidth=500;
  frontHeight=250;
  backWidth=500;
  backHeight=250;

  constructor(private el:ElementRef) { }

  ngOnInit(): void {
  }
  frontZoomIn(event) {
    if(event.height>= 100 && event.width>=200){
   event.height = event.height - 20;
   event.width = event.width - 20;
    }
  }
  frontZoomOut(event) {
    if(event.height<= 400 && event.width<=800){
    event.width = event.width + 20;
    event.height = event.height + 20;
    }
   
  }
  backZoomIn(event) {
    if(event.height>= 100 && event.width>= 200) {
    event.height = event.height - 20;
    event.width = event.width - 20;
    }
   }
   backZoomOut(event) {
    if(event.height<= 400  && event.width<= 800){
     event.width = event.width + 20;
     event.height = event.height + 20;
    }
    
   }
   frontRotate(event) {
   
   }
   backRotate(event) {
    
   }

}
