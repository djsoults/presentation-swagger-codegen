import { Component, OnInit } from '@angular/core';
import { Presentation, PresentationService } from '../../api';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.sass']
})
export class PresentationComponent implements OnInit {

  private presentation: Presentation;

  constructor(private presentationService: PresentationService) { }

  ngOnInit() {
    this.presentationService.apiPresentationGet().subscribe(x => this.presentation = x);
  }

}
