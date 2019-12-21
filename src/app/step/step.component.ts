import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatRadioChange} from '@angular/material';
import {DataService} from '../data.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.sass']
})
export class StepComponent implements OnInit {
  @Input() index: number;
  @Output() onloadNextClick = new EventEmitter<void>();

  buttonText: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.buttonText = 'DALEJ >';
    this.dataService.loadData();
  }

  next() {
    this.onloadNextClick.emit();
  }

}
