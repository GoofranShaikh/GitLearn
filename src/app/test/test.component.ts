
import { Component,OnInit, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input() public parentData:string;
  @Output() public childEvent=new EventEmitter()

  constructor() { }

  ngOnInit() {
  
  }
  sendDatatoParent(){
    this.childEvent.emit('hey Goofran')
  }
}


