import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StaffService } from '../services/staff.service';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
  @Output() backToMainPage = new EventEmitter()
  public form: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private staffService: StaffService,
    private snacks: MatSnackBar
  ) { 
  }

  ngOnInit(): void {    
    this.form = this.fb.group({
      name: [null, Validators.required],
      position: [null, Validators.required], 
    });  
  }

  addEmployee() {
    const formValue = this.form.value;
    try {
      this.staffService.addEmployee(formValue.name, formValue.position)
      this.snacks.open('The new employee is added successfully',"", {
        duration: 2000,
        horizontalPosition: "center",
        verticalPosition: "top",
      });

      this.backToMainPage.emit();
      
    }
    catch(e) {
      this.snacks.open('error!!!!')
    }
  }

  clickCancel() {
    this.backToMainPage.emit();
  }

}
