import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';
import {MatRadioButton} from '@angular/material/radio/typings/radio';
import {Answer} from '../answer';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.sass']
})
export class StepComponent implements OnInit {
  @Input() index: number;
  @Input() selectedValue: MatRadioButton;
  @Output() onloadNextClick = new EventEmitter<void>();

  buttonText: string;
  matchMattresses: Map<string, number> = new Map<string, number>();
  showEmbed = false;
  lastSelectedValue: Answer = undefined;
  questionSize = 5;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.buttonText = 'DALEJ >';
    this.dataService.loadData(this.index, 0, 100);
  }

  next(question: string) {
    this.onloadNextClick.emit();
    this.index++;
    if (this.index  === this.questionSize) {
      console.log('Load materace');
      console.log(this.lastSelectedValue);
      this.matchMattresses = this.dataService.loadProposedMattresses(this.lastSelectedValue.stop, this.questionSize);
    } else if (this.lastSelectedValue !== undefined) {
      this.dataService.loadData(this.index, this.lastSelectedValue.start, this.lastSelectedValue.stop);
    }
  }

  onSelectedValuesMapChange($event) {
    console.log($event);
    this.lastSelectedValue = $event;
  }

}
