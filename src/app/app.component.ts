import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data='fromAppComponent'
  title = 'angmodule';
  public message=""
  public form:any;
}
