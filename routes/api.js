const express = require('express');
const router = express.Router();
const config = require("../config");
const algosdk = require("algosdk");

var transactions = [];
const myAccount = algosdk.mnemonicToSecretKey(config.mnemonic);
const algodClient = new algosdk.Algodv2(
  {
    'X-API-Key': config.algodClientToken
  },
  config.algodClientUrl,
  config.algodClientPort
);

const coin = {
  0: 'head',
  1: 'tail'
};

router.post('/flip', async function (req, res, next) {
  try {
    let messages = [];
    let result = "";
    let txResult = "";
    let choice = req.body.choice;
    let txId = req.body.txId;

    if (txId && transactions.indexOf(txId) == -1 && (choice == 'tail' || choice == 'head')) {
      transactions.push(txId);

      var confirmedTxn = await algodClient.pendingTransactionInformation(txId).do()
      var sender = algosdk.encodeAddress(confirmedTxn.txn.txn.snd)
      console.log("Sender", sender);
      var receiver = algosdk.encodeAddress(confirmedTxn.txn.txn.rcv)
      console.log("Receiver", receiver);
      var amount = confirmedTxn.txn.txn.amt;
      console.log("Amount", amount);

      if (receiver == myAccount.addr && parseInt(amount) == 100000) {
        var lastRound = (await algodClient.status().do())["last-round"];
        messages.push({ info: "Last Round", value: lastRound });

        var currentround = lastRound;
        while (lastRound == currentround) {
          await new Promise(f => setTimeout(f, 1000));
          currentround = (await algodClient.status().do())["last-round"];
        }
        messages.push({ info: "Current Round", value: currentround });

        var blk = await algodClient.block(currentround).do();
        var hash = algosdk.encodeAddress(blk.cert.prop.dig);
        messages.push({ info: "Block Hash", value: hash });

        var flipResult = flip(hash);
        messages.push({ info: "Hash Number", value: flipResult.hash });
        messages.push({ info: "Mod2", value: flipResult.hash % 2 });
        messages.push({ info: "Result", value: flipResult.result });
        result = flipResult.result;

        if (flipResult.result == choice) {
          let params = await algodClient.getTransactionParams().do();
          const receiver = sender;
          const enc = new TextEncoder();
          let note = enc.encode("Win Flip Coin Game");
          let txn = algosdk.makePaymentTxnWithSuggestedParams(myAccount.addr, receiver, 200000, undefined, note, params);
          let signedTxn = txn.signTxn(myAccount.sk);
          let txIdResult = txn.txID().toString();
          console.log("Signed transaction with txID: %s", txIdResult);
          let tx = await algodClient.sendRawTransaction(signedTxn).do();
          messages.push({ info: "TxId", value: txIdResult });
          txResult = txIdResult;
        }
      } else {
        messages.push({ info: "Error", value: "Wrong transaction sent!" });
      }
    }
    res.json({result: result, txId: txResult, messages: messages});
  } catch (err) {
    console.error(`Error `, err.message);
    res.status(err.statusCode || 500).json({ 'message': err.message });
  }
});

function flip(hash) {
  /* Simple hash function. */
  var a = 1, c = 0, h, o;
  if (hash) {
    a = 0;
    /*jshint plusplus:false bitwise:false*/
    for (h = hash.length - 1; h >= 0; h--) {
      o = hash.charCodeAt(h);
      a = (a << 6 & 268435455) + o + (o << 14);
      c = a & 266338304;
      a = c !== 0 ? a ^ c >> 21 : a;
    }
  }
  var result = a % 2;
  return { hash: a, result: coin[result] };
}

module.exports = router;
