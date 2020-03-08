import { Component, OnInit } from '@angular/core';
import { NumListService } from '../num-list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.css'],
  providers: [NumListService]
})
export class CompOneComponent implements OnInit {
  list: number[] = [];
  numValue: any;

  constructor(private numListService: NumListService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  addNewNum(val: any) {
    if (val != null) {
      this.numListService.addNum(val);
      this.list = this.numListService.getList();
      this.toastr.success(val + ' ' + 'Number added successfully..!','Success');
    } else {
      this.list = this.numListService.getList();
      this.toastr.error('Please Enter Number','Error');
    }
  }

}
