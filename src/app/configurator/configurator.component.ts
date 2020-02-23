import { Component, OnInit } from '@angular/core';
import {MatRadioButton} from '@angular/material/radio/typings/radio';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.sass']
})
export class ConfiguratorComponent implements OnInit {
  index = 1;
  selectedValue: MatRadioButton;
  footerShow = false;

  constructor() { }

  ngOnInit(): void {
    this.index = 1;
  }

  onloadNextClick(isSummary: boolean) {
    console.log(this.selectedValue);
    this.selectedValue = undefined;
    console.log('onloadNextClick:' + this.selectedValue);
    this.footerShow = isSummary;
  }
}
