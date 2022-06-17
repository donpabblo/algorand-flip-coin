import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  apiPrefix = 'api';

  constructor(
    private http: HttpClient
  ) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => error);
  }

  flipCoin(choice: string, txId: string): Observable<any> {
    return this.http.post<any>('/' + this.apiPrefix + '/flip', { choice: choice, txId: txId })
      .pipe(
        catchError(this.handleError)
      );
  }

}
