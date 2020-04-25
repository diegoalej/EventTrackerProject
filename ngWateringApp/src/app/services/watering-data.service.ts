import { Watering } from './../models/watering';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class WateringDataService {

  private baseUrl = environment.baseUrl;

  private url = this.baseUrl + 'api/waterings';

  constructor(
      private router: Router,
      private http: HttpClient
  ) { }

  public index() {
      return this.http
        .get<Watering[]>(this.url)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('KABOOM index method in todo service');
          })
        );

  }

  public show(id) {
      return this.http
        .get<Watering>(`${this.url}/${id}`)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('KABOOM show method in todo service');
          })
        );
  }

  public create(newWatering: Watering) {
      return this.http
        .post<Watering[]>(this.url, newWatering)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('KABOOM index method in todo service');
          })
        );
  }

  public destroy(id: number) {
      return this.http.delete(`${this.url}/${id}`)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('KABOOM destroy method in todo service');
          })
        );
  }

  public update(watering: Watering) {
      // if (watering.completed === true) {
      //   todo.completeDate = this.datePipe.transform(Date.now(), 'shortDate');
      // }
      // else {
      //   todo.completeDate = '';
      // }
      console.log(watering);
      return this.http
        .put<Watering[]>(`${this.url}/update`, watering)
        .pipe(
          catchError((err: any) => {
            console.log(err);
            return throwError('KABOOM update method in todo service');
          })
        );
  }

}
