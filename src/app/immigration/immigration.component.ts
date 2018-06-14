import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immigration',
  templateUrl: './immigration.component.html',
  styleUrls: ['./immigration.component.css']
})
export class ImmigrationComponent implements OnInit {

  onSubmit(form: any): void {
    console.log('you submitted value:', form);

  }

  constructor() { }

  ngOnInit() {
  }
  countries = [" ", "USA", "UK", "India"];
}
