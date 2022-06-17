// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  algodClientUrl: "https://testnet-algorand.api.purestake.io/ps2",
  algodClientPort: "",
  algodClientToken: "QWvOEenBjg1mkIsC9dPNZ9q9AsIPTtKXalswRv8u",
  recipientAddress: "FVQID2AVLW7NRK6P3FLT27356TMQMGS53ONA3RJ25WOBUKRUJXEO2HOGCE",
  algoConnectSettings: {
    shouldSelectOneAccount: true,
    openManager: false
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
