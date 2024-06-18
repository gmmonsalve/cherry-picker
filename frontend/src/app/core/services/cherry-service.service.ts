import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DateRoutes } from '../enums/routes.enum';
import { Date } from '../interfaces/date.interface';

@Injectable({
  providedIn: 'root'
})
export class CherryService {

  apiEndpoint: string = environment.apiEndpoint

  constructor(private http: HttpClient) { }

  getDates(): Observable<Date[]> {
    return this.http.get<Date[]>(this.apiEndpoint + DateRoutes.dates);
  }

  createDate(date: Date): any {
   return this.http.post(this.apiEndpoint + DateRoutes.dates, date)
  }

}
