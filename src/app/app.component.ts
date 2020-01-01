import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatRadioChange} from '@angular/material';
import {DataService} from './data.service';
import {MatRadioButton} from '@angular/material/radio/typings/radio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
@Injectable()
export class AppComponent implements OnInit {
  title = 'Konfigurator materacy';


  constructor() {
  }

  ngOnInit(): void {
  }


}
