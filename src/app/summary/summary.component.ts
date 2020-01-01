import {Component, Input, OnInit} from '@angular/core';
import {KeyValue} from '@angular/common';
import {Router} from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {

  @Input() matchMattresses: Map<string, number> = new Map<string, number>();
  @Input() showEmbed = false;

  faSearch = faSearch;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  valueDescOrder = (a: KeyValue<string, number>, b: KeyValue<string, number>): number => {
    return b.value - a.value;
  }

  playVideo() {
    this.showEmbed = true;
  }

  restart() {
    this.router.navigate(['/start']);
  }

  print() {
  }

}
