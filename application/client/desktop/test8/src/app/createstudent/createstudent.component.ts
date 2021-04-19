import { Component, OnInit } from '@angular/core';
import { CreatestudentService } from './createstudent.service';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrls: ['./createstudent.component.scss'],
})

export class CreatestudentComponent implements OnInit {
    public students = {
        name: '',
        email: '',
        roll_no: '',
        department: '',
    }

    constructor (
        private createstudentService: CreatestudentService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createstudentService.GpCreate(this.students).subscribe(data => {
            this.students.name = ''
 	 	this.students.email = ''
 	 	this.students.roll_no = ''
 	 	this.students.department = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}