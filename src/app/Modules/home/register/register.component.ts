import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  isSave: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  dangKy(){
    this.isSave = true;
  }

}
