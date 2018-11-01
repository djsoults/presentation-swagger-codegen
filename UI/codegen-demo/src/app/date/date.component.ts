import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../../api';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.sass']
})
export class DateComponent implements OnInit {

  private myDate: Date;

  constructor(private valuesService: ValuesService) { }

  ngOnInit() {
    this.valuesService.apiValuesDateGet().subscribe(x => this.myDate = x);
  }

}
