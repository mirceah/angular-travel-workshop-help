import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../destinations.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

   constructor(public destServ: DestinationsService) {}

  ngOnInit() {
  }

}