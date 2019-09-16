import { Component } from '@angular/core';
import { DestinationsService } from './destinations.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'meTravel';

  constructor(public destServ: DestinationsService) {}

  displayStruct() {
    this.destServ.isStructure = !this.destServ.isStructure;
  }
}