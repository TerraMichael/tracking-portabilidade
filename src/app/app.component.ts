import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tracking-portabilidade';

  statusValueFromAPI: string;
  statusLabels: string[] = ['Portando', 'Concluído'];

  constructor(){
    this.statusValueFromAPI = 'Portando';
  }
}
