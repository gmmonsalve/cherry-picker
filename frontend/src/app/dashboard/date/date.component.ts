import { Component, Input, OnInit } from '@angular/core';
import { Date } from 'src/app/core/interfaces/date.interface';

@Component({
  selector: 'date-component',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  @Input() date: Date | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
