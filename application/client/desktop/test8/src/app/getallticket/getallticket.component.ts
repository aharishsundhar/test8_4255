import { Component, OnInit } from '@angular/core';
import { GetallticketService } from './getallticket.service';

@Component({
  selector: 'app-getallticket',
  templateUrl: './getallticket.component.html',
  styleUrls: ['./getallticket.component.scss'],
})

export class GetallticketComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Name', field: 'name'  },{ headerName: 'Email', field: 'email'  },{ headerName: 'Roll_No', field: 'roll_no'  },{ headerName: 'Department', field: 'department'  },];
    public students = {
        name: '',
        email: '',
        roll_no: '',
        department: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallticketService: GetallticketService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallticketService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}