
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
@Output() public childForm=new EventEmitter()

  ngOnInit() {
   
  }
  
  openForm(){
    var modal=document.getElementById('myModal')
    modal.style.display="block"
    this.childForm.emit('form opened')
    
  }

  closeModal(){
    var modal=document.getElementById('myModal')
    modal.style.display="none"
  }
  formValues(data:any){
    console.log(data.value)
    this.childForm.emit(data.value)

  }
}
