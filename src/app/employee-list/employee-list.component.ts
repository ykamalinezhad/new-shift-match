import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employeeDetails: any[];
  public columns: string[];

  constructor( private staffService: StaffService) { }

  ngOnInit() {
    this.employeeDetails = this.staffService.getStaffDetails()
    this.columns = ["id", "name", "position"]
  }
}
