import { Component, OnInit } from '@angular/core';
import {MatRadioButton} from '@angular/material/radio/typings/radio';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.sass']
})
export class ConfiguratorComponent implements OnInit {
  index = 0;
  selectedValue: MatRadioButton;

  constructor() { }

  ngOnInit(): void {
    this.index = 0;
  }

  onloadNextClick() {
    this.index++;
    console.log(this.selectedValue);
    this.selectedValue = undefined;
    console.log("onloadNextClick: "  + this.selectedValue);
  }
}
