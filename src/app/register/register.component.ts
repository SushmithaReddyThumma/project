import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


  export class RegisterComponent implements OnInit {
  onSubmit(form: any): void {  
    console.log('you submitted value:', form);

   }

  ngOnInit() {
  }

 countries=[" ", "India","USA","Canada"];
}

