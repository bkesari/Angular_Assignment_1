import { Component, OnInit} from '@angular/core';
import { VehiclesListService } from "services/vehiclesList.service";

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './Vehicles.component.html',
  styleUrls: ['./Vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
    Vehicles: Array<any>;
    detailsClicked : boolean;
    vehicle : any;


  constructor(lookupSvc: VehiclesListService) {  

    /*This method is used for fetching the result from the service*/  
    lookupSvc.getVehiclesListFromApi()
      .subscribe(result => {
        this.Vehicles = result.Vehicles;                
      },
      error=>{
        console.log(error);
      });
  }

/*On click of row this method is used to get the corresponding vehicle which was clicked*/
VehicleDetails(vehicle : VehiclesComponent){  
  this.detailsClicked = true;    
  this.vehicle = vehicle; 
}  
  ngOnInit() {
    
  }


}
