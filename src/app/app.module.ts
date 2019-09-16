import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material";
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FavoriteDestinationComponent } from './favorite-destination/favorite-destination.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';
import { DestinationSummaryComponent } from './destination-summary/destination-summary.component';
import { ContactComponent } from './contact/contact.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { HelpComponent } from './help/help.component';
import { StructureComponent } from './structure/structure.component';

@NgModule({
  imports:      [
    BrowserModule, FormsModule, MatIconModule,
    RouterModule.forRoot([
      { path: 'destinations', component: DestinationsComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: '/destinations', pathMatch: 'full' }
    ])
    ],
  declarations: [ AppComponent, FavoriteDestinationComponent, DestinationDetailsComponent, DestinationSummaryComponent, ContactComponent, DestinationsComponent, HelpComponent, StructureComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
