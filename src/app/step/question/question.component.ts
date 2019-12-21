import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatRadioChange} from '@angular/material';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {
  @Input() question: string;
  @Input() answersMap: Map<string, any>;



  constructor() { }

  ngOnInit() {
  }

  radioChange($event: MatRadioChange) {
    console.log($event);
  }


}
