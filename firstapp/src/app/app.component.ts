import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="My First Angular App";
  fname:string="Ravi";
  lname:string="Kant";
  url:string="http://www.google.com";
  imgurl:string="./assets/images/angularlogo.png";
  h:number=100;
  w:number=150;
  message= "Hii Ravi You have clicked this button";
  showMe(){
    this.message="Hii Ravi You have clicked this button";
  
  }
  products=[
    {name:"Pencil",price:10.55,available:"09-03-2022",rating:4.5},
    {name:"Eraser",price:20.05,available:"09-03-2022",rating:4.6},
    {name:"Pen",price:55.60,available:"09-03-2022",rating:4.2},
    {name:"Eraser",price:10,available:"09-03-2022",rating:4.0},
  ]
}
