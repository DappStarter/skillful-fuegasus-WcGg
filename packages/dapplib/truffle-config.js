require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remain solid grace deposit fresh twin'; 
let testAccounts = [
"0x9b06721750498f6e0d6923d4c13783477353eaeaee0224ec62a00113d7e46756",
"0x6ff0d7d1fd590bd8850e0caf9aa98852b26d8f55e0361763b5aa68f3702d9af0",
"0xab25c6a2025506a412b4cc0d5bf3f1305e2ea11d392cb01b81a57f331bcb2544",
"0x8cb2318a2bec0f0b2200e50c429e06230c1e809ed4e2b0f5e1dadee3ab01ec0d",
"0x123843e111b2012d83766699112f63bdb97cce807f5c8015f059c952d9fa74d0",
"0x0f148f27c09b9a8c0dd4cca541e216d0975d4f2bb7b784236cee44f8328f75a9",
"0x262db24f743aa291952342d59cde95734dc11b07143ad619ca9bfb29b7d5ae7d",
"0xd3485272ff769af2f7b357af1433152a5243758d7b703c486b6e0537e6ad97dd",
"0xafdde00e69f7e11d8ef4a2f90752dd3a63efe8da141bf4096790a15bfb611dc6",
"0x0788c948ac48c58d690b458e6d0b7136131709096dae35625fbe7252f61cb626"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

