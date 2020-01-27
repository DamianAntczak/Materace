import {Component, Input, OnInit} from '@angular/core';
import {KeyValue} from '@angular/common';
import {Router} from '@angular/router';
import { faSearch, faPlay } from '@fortawesome/free-solid-svg-icons';
import {DataService} from '../data.service';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {

  @Input() matchMattresses: Map<string, number> = new Map<string, number>();
  @Input() showEmbed = false;

  faSearch = faSearch;
  faPlay = faPlay;
  link = 'https://www.youtube.com/embed/1_-GMcbhMx8';

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  valueDescOrder = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
    return a.value - b.value;
  }

  playVideo(selectedMattress) {
    let data = this.dataService.getDataAboutMattress(selectedMattress);
    console.log(data);
    this.link = data[2];
    this.showEmbed = true;
  }

  restart() {
    this.router.navigate(['/start']);
  }

  print() {
  }

}
