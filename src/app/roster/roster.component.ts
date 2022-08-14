import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, View } from '@syncfusion/ej2-angular-schedule';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  public setView: View = 'Week';
  public employeeDetails : EventSettingsModel
  constructor(private staffService: StaffService) { }

  ngOnInit() {
    const data = this.staffService.getStaffDetails()
    this.employeeDetails = {
      dataSource : data,    
      allowAdding: false, // user is not able to add a new schedule directly
      allowEditing: false, // user is not able to edit an existing schedule directly
      allowDeleting: false, // user is not able to delete an existing schedule directly
      // Mapping the field names
      fields: { 
        id: 'id', 
        subject: { name: 'name' }, 
        description: {name:'title'},
        startTime: { name: 'startTime' }, 
        endTime: { name: 'endTime' } 
      }
    }
  }
}
