import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('rotatedState', [
      state('start', style({ transform: 'rotateX(0)' })),
      state('head', style({ transform: 'rotateX(2160deg)' })),
      state('tail', style({ transform: 'rotateX(1980deg)' })),
      transition('start => head', animate('8000ms ease-out')),
      transition('start => tail', animate('3000ms ease-out')),
      transition('head => tail', animate('3000ms ease-out')),
      transition('tail => head', animate('3000ms ease-out'))
    ])
  ]
})
export class AppComponent {
  private myAlgoConnect = new MyAlgoConnect();

  account = null;
  error = null;
  disableBtns = false;
  coinState = 'start';
  txId = null;
  messages = [];

  constructor(
    private http: HttpClient
  ) { }

  async connectOrDisconnect() {
    this.error = null;
    try {
      if (this.account) {
        this.account = null;
      } else {
        let accounts = await this.myAlgoConnect.connect({
          shouldSelectOneAccount: true,
          openManager: false
        });

        console.log(accounts);
        this.account = accounts[0];
      }
    } catch (err) {
      this.error = err;
    }
  }

  async flip(choice: string) {

  }

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

  callTest() {
    this.test().subscribe({
      next: (result: any) => {
        console.log(result);
      },
      error: (err) => { }
    });
  }

  test() {
    return this.http.get<any>('/api/test')
      .pipe(
        catchError(this.handleError)
      );
  }
}
