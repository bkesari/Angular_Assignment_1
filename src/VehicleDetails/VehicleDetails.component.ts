import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-modify-VehicleDetails',
  templateUrl: './VehicleDetails.component.html',
  styleUrls: ['./VehicleDetails.component.css']
})
export class VehicleDetailsComponent implements OnInit {

 constructor (){
   
 }

  ngOnInit() {
  
  }

@Input() editedVehicle :any={} ;
 
}
