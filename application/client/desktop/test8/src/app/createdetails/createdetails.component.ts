import { Component, OnInit } from '@angular/core';
import { CreatedetailsService } from './createdetails.service';

@Component({
  selector: 'app-createdetails',
  templateUrl: './createdetails.component.html',
  styleUrls: ['./createdetails.component.scss'],
})

export class CreatedetailsComponent implements OnInit {
    public details = {
        roll_no: '',
        address: '',
        phone: '',
    }

    constructor (
        private createdetailsService: CreatedetailsService,
    ) { }

    ngOnInit() {
    }
}