import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  @Input() data: string;
  @Input() overlayContentStyle: any;

  isHelp = false;

  toggleHelp() {
    this.isHelp = !this.isHelp;
  }
}