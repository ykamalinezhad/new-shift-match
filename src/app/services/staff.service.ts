import { Injectable } from '@angular/core';
import { addDays } from '@syncfusion/ej2-angular-schedule';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  // dummy data for employee list
  public employees = [
    {
      id: '1',
      startTime: new Date(new Date().setHours(6,0,0)),
      endTime: new Date(new Date().setHours(14,0,0)),
      name: 'Sarah',
      title:'Nurse',
      isReadonly: true,
    },
    {
      id:'2',
      startTime: new Date(new Date().setHours(6,0,0)),
      endTime: new Date(new Date().setHours(14,0,0)),
      name: 'John',
      title:'GP',
      isReadonly: true
    },
    {
      id: '3',
      startTime: new Date(new Date().setHours(14,0,0)),
      endTime: new Date(new Date().setHours(22,0,0)),
      name: 'Yalda',
      title: 'Nurse',
      isReadonly: true
    },
    {
      id: '4',
      startTime: new Date(new Date().setHours(14,0,0)),
      endTime: new Date(new Date().setHours(22,0,0)),
      name: 'Mary',
      title: 'GP',
      isReadonly: true
    },
    {
      id: '3',
      startTime: new Date(new Date().setHours(22,0,0)),
      endTime: addDays(new Date(new Date().setHours(6,0,0)),1),
      name: 'Laura',
      title: 'GP',
      isReadonly: true
    },
    {
      id: '5',
      startTime: new Date(new Date().setHours(22,0,0)),
      endTime: addDays(new Date(new Date().setHours(6,0,0)),1),
      name: 'Amy',
      title: 'Nurse',
      isReadonly: true
    },
    {
      id: '6',
      startTime: addDays(new Date(new Date().setHours(6,0,0)),2),
      endTime: addDays(new Date(new Date().setHours(14,0,0)),2),
      name: 'Lewis',
      title: 'GP',
      isReadonly: true
    },
    {
      id: '7',
      startTime: addDays(new Date(new Date().setHours(6,0,0)),2),
      endTime: addDays(new Date(new Date().setHours(14,0,0)),2),
      name: 'Jeremy',
      title: 'Nurse',
      isReadonly: true
    },
    {
      id: '8',
      startTime: addDays(new Date(new Date().setHours(14,0,0)),2),
      endTime: addDays(new Date(new Date().setHours(22,0,0)),2),
      name: 'Kevin',
      title: 'Nurse',
      isReadonly: true
    },
    {
      id: '9',
      startTime: addDays(new Date(new Date().setHours(14,0,0)),2),
      endTime: addDays(new Date(new Date().setHours(22,0,0)),2),
      name: 'David',
      title: 'GP',      
      isReadonly: true
    },
    {
      id: '10',
      startTime: addDays(new Date(new Date().setHours(22,0,0)),2),
      endTime: addDays(new Date(new Date().setHours(6,0,0)),3),
      name: 'Claire',
      title: 'GP',
      isReadonly: true
    },
    {
      id: '11',
      startTime: addDays(new Date(new Date().setHours(22,0,0)),2),
      endTime: addDays(new Date(new Date().setHours(6,0,0)),3),
      name: 'Alex',
      title: 'Nurse',
      isReadonly: true
    },
    {
      id: '12',
      startTime: addDays(new Date(new Date().setHours(6,0,0)),3),
      endTime: addDays(new Date(new Date().setHours(14,0,0)),3),
      name: 'Sam',
      title: 'Nurse',
      isReadonly: true
    },
    {
      id: '13',
      startTime: addDays(new Date(new Date().setHours(6,0,0)),3),
      endTime: addDays(new Date(new Date().setHours(14,0,0)),3),
      name: 'Zachary',
      title: 'GP',
      isReadonly: true
    },
    {
      id: '14',
      startTime: addDays(new Date(new Date().setHours(14,0,0)),3),
      endTime: addDays(new Date(new Date().setHours(22,0,0)),3),
      name: 'Anna',
      title: 'GP',
      isReadonly: true
    },
    {
      id: '15',
      startTime: addDays(new Date(new Date().setHours(14,0,0)),3),
      endTime: addDays(new Date(new Date().setHours(22,0,0)),3),
      name: 'Lucy',
      title: 'GP',
      isReadonly: true
    },
    {
      id: '16',
      startTime: addDays(new Date(new Date().setHours(22,0,0)),3),
      endTime: addDays(new Date(new Date().setHours(6,0,0)),4),
      name: 'Isaac',
      title: 'GP',
      isReadonly: true
    },
    {
      id: '17',
      startTime: addDays(new Date(new Date().setHours(22,0,0)),3),
      endTime: addDays(new Date(new Date().setHours(6,0,0)),4),
      name: 'Miriam',
      title: 'Nurse',
      isReadonly: true
    }
  ];
  
  constructor() { }

  public getStaffDetails() {
    return this.employees;
  }

  public addEmployee(name: string, position:string) {
    const lastIndex = this.employees.length-1
    const addId = parseInt(this.employees[lastIndex].id)+1
    this.employees.push(
      {
        id: addId.toString(),
        startTime: addDays(new Date(new Date().setHours(6,0,0)),1), // the first day that the new employee can start for the first day
        endTime: addDays(new Date(new Date().setHours(14,0,0)),1), // the first day that the new employee can finish for the first day
        name: name,
        title: position,
        isReadonly: true
      }
    );
  }
}
