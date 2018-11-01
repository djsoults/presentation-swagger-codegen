import { Component, OnInit } from '@angular/core';
import { DateBuilder, ValuesService } from '../../api';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.sass']
})
export class DateComponent implements OnInit {

  private myDate: Date;
  private today: Date;

  constructor(private valuesService: ValuesService) { }

  ngOnInit() {
    this.valuesService.apiValuesDateGet().subscribe(x => this.myDate = x);

    const todayBuilder: DateBuilder = {
      year: 2018,
      month: 11,
      day: 1
    };

    this.valuesService.apiValuesDatePost(todayBuilder).subscribe(x => this.today = x);
  }

}
