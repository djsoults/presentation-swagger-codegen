import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../../api';

@Component({
  selector: 'app-int',
  templateUrl: './int.component.html',
  styleUrls: ['./int.component.sass']
})
export class IntComponent implements OnInit {
  private myInt: number;

  constructor(private valuesService: ValuesService) { }

  ngOnInit() {
    this.valuesService.apiValuesIntGet().subscribe(x => this.myInt = x);
  }

}
