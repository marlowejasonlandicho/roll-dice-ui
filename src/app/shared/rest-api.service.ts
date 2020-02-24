import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { HttpClient, HttpEvent, HttpHeaders, HttpErrorResponse, HttpEventType, HttpParams } from '@angular/common/http';
import { RelativeDistribution } from './relative-distribution';
import { DiceRoll } from './dice-roll';
import { environment } from '../../environments/environment';
import { DiceSimulation } from './dice-simulation';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  rollDice(numOfDice: number, numOfSideOfDice: number, numOfRolls: number): Observable<DiceRoll[]> {
    let params = new HttpParams();
    params = params.set('numOfDice', numOfDice.toString());
    params = params.set('numOfSideOfDice', numOfSideOfDice.toString());
    params = params.set('numOfRolls', numOfRolls.toString());

    return this.http.get<DiceRoll[]>(environment.apiURL + '/roll', { params: params })
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getRollDiceSimulation(numOfDice: number, numOfSideOfDice: number): Observable<DiceSimulation> {
    let params = new HttpParams();
    params = params.set('numOfDice', numOfDice.toString());
    params = params.set('numOfSideOfDice', numOfSideOfDice.toString());

    return this.http.get<DiceSimulation>(environment.apiURL + '/simulation/total', { params: params })
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  getRelativeDistribution(numOfDice: number, numOfSideOfDice: number): Observable<RelativeDistribution[]> {
    let params = new HttpParams();
    params = params.set('numOfDice', numOfDice.toString());
    params = params.set('numOfSideOfDice', numOfSideOfDice.toString());

    return this.http.get<RelativeDistribution[]>(environment.apiURL + '/relative/distribution', { params: params })
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
