import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatRadioChange} from '@angular/material';
import {DataService} from '../data.service';
import {KeyValue} from '@angular/common';
import {MatRadioButton} from '@angular/material/radio/typings/radio';

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
  selectedValuesMap: Map<string, number>;
  matchMattresses: Map<string, number> = new Map<string, number>();
  showEmbed = false;

  constructor(public dataService: DataService) {
  }

  ngOnInit() {
    this.buttonText = 'DALEJ >';
    this.dataService.loadData();
  }

  next(question: string) {
    this.onloadNextClick.emit();
  }

  onSelectedValuesMapChange($event: Map<string, number>) {
    this.selectedValuesMap = $event;
    let counterArray = Array<number>(this.dataService.mattresses[0].length).fill(0);
    this.selectedValuesMap.forEach((value, key) => {
      var answersMap = this.dataService.answersMap.get(key);
      console.log(answersMap[value]);

      this.dataService.mattresses.forEach((row, index1) => {
        row.forEach((value1, index2) => {
          if (index2 === 1 && value1 === answersMap[value]) {
            console.log('hit - ' + index1);
          } else if (value1 === '#' && row[1] === answersMap[value]) {
            counterArray[index2] += 1;
          }
        });
      });
    });

    counterArray.forEach((value, index1) => {
      if (value > 0) {
        console.log(value + ' ' + index1 + ' ' + this.dataService.mattresses[0][index1]);
        this.matchMattresses.set(this.dataService.mattresses[0][index1], value);
      }
    });
  }

}
