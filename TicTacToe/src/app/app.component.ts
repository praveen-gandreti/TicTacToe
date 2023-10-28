import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hide=false
  dis()
  {
    this.hide=true
  }
  title = 'TicTacToe';
}
