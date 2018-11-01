import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../../api';

@Component({
  selector: 'app-guid',
  templateUrl: './guid.component.html',
  styleUrls: ['./guid.component.sass']
})
export class GuidComponent implements OnInit {

  private myGuid: string;

  constructor(private valuesService: ValuesService) { }

  ngOnInit() {
    this.valuesService.apiValuesStringGet().subscribe(x => this.myGuid = x);
  }

}
