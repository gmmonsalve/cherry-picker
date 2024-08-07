import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Date } from 'src/app/core/interfaces/date.interface';
import { CherryService } from 'src/app/core/services/cherry-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {



  constructor(private cherryService: CherryService) { }

  dateList$: Observable<Date[]> | null = null;
  dateList: Date[] = [];
  pickedDate: Date | null = null;

  ngOnInit(): void {
    this.getAllDates();
  }

  getAllDates(): void {
    this.dateList$ = this.cherryService.getDates().pipe(
      tap((data)=>this.dateList=data)
    )
  }

  pickDate(){
    const date: Date = this.cherryService.pickRandomDate(this.dateList)
    this.pickedDate = date
  }

  
}
