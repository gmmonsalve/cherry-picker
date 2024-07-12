import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Date } from 'src/app/core/interfaces/date.interface';
import { CherryService } from 'src/app/core/services/cherry-service.service';

@Component({
  selector: 'date-creator',
  templateUrl: './date-creator.component.html',
  styleUrls: ['./date-creator.component.scss']
})
export class DateCreatorComponent implements OnInit {

  @Output() dateCreated = new EventEmitter<Date>();

  constructor(private dateService: CherryService) { }

  ngOnInit(): void {
  }

  date: string = '';
  create(): void {
    this.dateService.createDate({ title: this.date }).subscribe(()=>{
      this.dateCreated.emit({ title: this.date });
    })
    this.date = '';
  }


}
