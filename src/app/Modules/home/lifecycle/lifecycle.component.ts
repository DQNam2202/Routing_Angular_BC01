import { Component, OnInit,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit,OnChanges {

  title:string = '';

  constructor() { }

  changeTitle(value:string){
    this.title = value;
  }

  ngOnChanges(changes : SimpleChanges):void{
    console.log("onChange");
  }

  ngOnInit(): void {
    console.log("onInit");
  }

}
