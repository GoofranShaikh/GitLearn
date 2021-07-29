
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  constructor() { }
@Input() name:string;
@Output() public form=new EventEmitter()
  ngOnInit() {
  }

}
