require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'good enter bottom solution finger deliver remember mistake good clog front slogan'; 
let testAccounts = [
"0xf0639bc1ab4fa32251c498211054e12e7e193205b3093c780766d44f87a47c25",
"0xcc0908d0f55ec90a3ae83598f2a576393bdcc064e5be64a66755f9a5bbf8a0d2",
"0x9d5be88d449cd8ff106ac6adec948bf90cd617fad3c263e2b5dfeb5b875096c0",
"0xc637003860b19012bd5cc5effa419d0bafac6a7964e81fd30e75998f4de0726b",
"0x82869ed72cf1b1c64df1020b88ede1e4c35ce57a2cf23728367383db72f525de",
"0x2aba1dd72bde96ffc6f8f7394a887f2a4488bdea6c324584b1062aec10138dfe",
"0xf47fb5992e8a50e79c7ee3887c2e7b893207ba95d05301df29b35b23a2aac8ff",
"0x4ef87fabd84d451347d7a6f99c5179bd799e19f3bc41b1538dd57b7d9bbeee57",
"0x93d7e19e84a1864653cdadafa6c2d67c7d01c99ba186bfbe8de858697013c944",
"0xe5dbcb5668dbbf717a41a5e653890df1d3bf69ccef1b137b2ff2a5d0a0013727"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


