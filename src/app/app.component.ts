import { Component } from '@angular/core';
import { View } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  // template: '<ejs-schedule [currentView]="setView"></ejs-schedule>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-shift-match';
  displayRosterSection: boolean = false;
  displayCreateEmployee: boolean = false;
  displayListOfEmployee: boolean = false;
  ngOnInit(): void {
  }

  displayRoster() {
      this.displayRosterSection = true;
      this.displayCreateEmployee = false;
      this.displayListOfEmployee = false;
  }

  createEmployee() {
      this.displayRosterSection = false;
      this.displayCreateEmployee = true;
      this.displayListOfEmployee = false;
  }

  getListOfEmployees() {
      this.displayListOfEmployee = true;
      this.displayRosterSection = false;
      this.displayCreateEmployee = false;
  }

  backToMainPageFn() {
    this.displayCreateEmployee = false;
  }
}
