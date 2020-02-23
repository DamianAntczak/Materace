import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {faPrint} from '@fortawesome/free-solid-svg-icons/faPrint';
import {faRedo} from '@fortawesome/free-solid-svg-icons/faRedo';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  faPrint = faPrint;
  faRedo = faRedo;

  @Output() onloadPrintClick = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  print() {
    console.log('Print');
    this.onloadPrintClick.emit();
  }

  restart() {
    this.router.navigate(['/start']);
  }
}
