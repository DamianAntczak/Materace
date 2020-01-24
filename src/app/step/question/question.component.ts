import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatRadioChange} from '@angular/material';
import {DataService} from '../../data.service';
import {MatRadioButton} from '@angular/material/radio/typings/radio';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {
  @Input() question: string;
  @Input() answersMap: Map<string, any>;
  @Input() index: number;
  @Input() selectedValue: MatRadioButton ;

  @Output() selectedValuesMapEmitter: EventEmitter<Map<string, number>> = new EventEmitter<Map<string, number>>();

  selectedValuesMap: Map<string, number> = new Map<string, number>()

  constructor(dataService: DataService) { }

  ngOnInit() {
  }

  radioChange($event: MatRadioChange) {
    this.selectedValuesMapEmitter.emit($event.value);
  }
}
