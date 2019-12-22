import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatRadioChange} from '@angular/material';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {
  @Input() question: string;
  @Input() answersMap: Map<string, any>;
  @Input() index: number;

  @Output() selectedValuesMapEmitter: EventEmitter<Map<string, number>> = new EventEmitter<Map<string, number>>();

  selectedValue: any;
  selectedValuesMap: Map<string, number> = new Map<string, number>()

  constructor(dataService: DataService) { }

  ngOnInit() {
  }

  radioChange($event: MatRadioChange) {
    console.log($event);
    console.log(this.question);
    this.selectedValuesMap.set(this.question, $event.value);
    this.selectedValuesMapEmitter.emit(this.selectedValuesMap);
  }
}
