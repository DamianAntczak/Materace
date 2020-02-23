import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';
import {MatRadioButton} from '@angular/material/radio/typings/radio';
import {Answer} from '../answer';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.sass']
})
export class StepComponent implements OnInit {
  @Input() index: number;
  @Input() selectedValue: MatRadioButton;
  @Output() onloadNextClick = new EventEmitter<boolean>();

  buttonText: string;
  matchMattresses: Map<string, number> = new Map<string, number>();
  showEmbed = false;
  lastSelectedValue: Answer = undefined;
  questionSize = 5;
  nextButtonDisabled = true;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.buttonText = 'DALEJ >';
    this.dataService.loadData(this.index, 0, 100);
  }

  next(question: string) {
    let summary = false;
    this.index++;
    if (this.index === this.questionSize) {
      console.log('Load materace');
      console.log(this.lastSelectedValue);
      this.matchMattresses = this.dataService.loadProposedMattresses(this.lastSelectedValue.stop, this.questionSize);
      summary = true;
    } else if (this.lastSelectedValue !== undefined) {
      this.dataService.loadData(this.index, this.lastSelectedValue.start, this.lastSelectedValue.stop);
      this.nextButtonDisabled = true;
    }
    this.onloadNextClick.emit(summary);
  }

  onSelectedValuesMapChange($event) {
    console.log($event);
    this.lastSelectedValue = $event;
    this.nextButtonDisabled = false;
    console.log(this.nextButtonDisabled);
  }

  print() {
    let doc = new jsPDF();
    this.matchMattresses.forEach((key, value) => {
      if (key > 0) {
        var number = key * 10;
        console.log('Tu taj!!!');
        console.log(number);
        doc.text(20, number, value);
      }
    });
    doc.save('Test.pdf');
  }
}
