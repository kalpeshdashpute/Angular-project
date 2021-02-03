import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  user='Kalpesh  Dashpute';
  title = 'Angular Life';
  
  constructor(){
    console.log(this.user);
    console.log(this.title);
    
  
}
}