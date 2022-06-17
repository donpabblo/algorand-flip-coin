import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import algosdk, { Algodv2 } from 'algosdk';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { environment } from './../environments/environment';
import { ServicesService } from './services.service';

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
  private algodClient: Algodv2;
  private choice = null;

  account = null;
  error = null;
  disableBtns = false;
  coinState = 'start';
  txId = null;
  messages = [];

  constructor(
    private services: ServicesService,
  ) {
    this.algodClient = new algosdk.Algodv2(
      {
        'X-API-Key': environment.algodClientToken
      },
      environment.algodClientUrl,
      environment.algodClientPort
    );
  }

  async connectOrDisconnect() {
    this.error = null;
    try {
      if (this.account) {
        this.account = null;
      } else {
        let accounts = await this.myAlgoConnect.connect(environment.algoConnectSettings);
        console.log(accounts);
        this.account = accounts[0];
      }
    } catch (err) {
      this.error = err;
    }
  }

  async flip(choice: string) {
    this.error = null;
    this.txId = null;
    this.messages = [];
    this.disableBtns = true;
    this.coinState = 'start';

    try {
      if (!this.account) {
        let accounts = await this.myAlgoConnect.connect(environment.algoConnectSettings);
        this.account = accounts[0];
      }

      let txId = await this.payGame();
      this.choice = choice;
      this.messages.push({ info: 'Choice', value: this.choice });
      let accountInfo = await this.algodClient.accountInformation(this.account.address).do();
      this.messages.push({ info: 'Balance', value: accountInfo.amount });

      this.coinState = 'head';

      this.services.flipCoin(choice, txId).subscribe({
        next: (result: any) => {
          this.messages = this.messages.concat(result.messages);
          this.disableBtns = false;
          this.coinState = result.result;
          if (this.coinState == this.choice) {
            this.messages.push({ info: "You Win 0.2 Algo!", value: "" });
            this.txId = result.txId;
          } else {
            this.messages.push({ info: "Bla bla... You Loose!", value: "" });
          }
        },
        error: (err) => {
          this.error = err;
        }
      })
    } catch (err) {
      this.error = err;
    }

  }

  private async payGame() {
    try {
      const enc = new TextEncoder();
      let note = enc.encode("Flip Coin Game");
      const params = await this.algodClient.getTransactionParams().do();
      const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
        suggestedParams: {
          ...params,
        },
        from: this.account.address,
        to: environment.recipientAddress,
        amount: 100000, // 0.1 Algo
        note: note
      });
      const signedTxn = await this.myAlgoConnect.signTransaction(txn.toByte());
      const response = await this.algodClient.sendRawTransaction(signedTxn.blob).do();
      console.log(response);
      this.messages.push({ info: 'Payed', value: '0.1 Algo' });
      return response.txId;
    } catch (err) {
      throw (err);
    }
  }

}
