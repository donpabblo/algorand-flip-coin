const env = process.env;

/* do not put password or any sensitive info here, done only for demo */
const config = {
  mnemonic: env.MNEMONIC,
  algodClientUrl: "https://testnet-algorand.api.purestake.io/ps2",
  algodClientPort: "",
  algodClientToken: "QWvOEenBjg1mkIsC9dPNZ9q9AsIPTtKXalswRv8u"
};

module.exports = config;
