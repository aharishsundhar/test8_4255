import { Component, OnInit } from '@angular/core';
import { GetalldetailsService } from './getalldetails.service';

@Component({
  selector: 'app-getalldetails',
  templateUrl: './getalldetails.component.html',
  styleUrls: ['./getalldetails.component.scss'],
})

export class GetalldetailsComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Roll_No', field: 'roll_no'  },{ headerName: 'Address', field: 'address'  },{ headerName: 'Phone', field: 'phone'  },];
    public details = {
        roll_no: '',
        address: '',
        phone: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getalldetailsService: GetalldetailsService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getalldetailsService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}