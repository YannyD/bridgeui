// const Web3 = require('web3');
// const BridgeEth = require('../build/contracts/BridgeEth.json');
// const BridgeBsc = require('../build/contracts/BridgeBsc.json');

// const web3Eth = new Web3('url to eth node (websocket)');
// const web3Bsc = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
// const adminPrivKey = '';
// const { address: admin } = web3Bsc.eth.accounts.wallet.add(adminPrivKey);

// const bridgeEth = new web3Eth.eth.Contract(
//   BridgeEth.abi,
//   BridgeEth.networks['4'].address
// );

// const bridgeBsc = new web3Bsc.eth.Contract(
//   BridgeBsc.abi,
//   BridgeBsc.networks['97'].address
// );

// bridgeEth.events.Transfer(
//   {fromBlock: 0, step: 0}
// )
// .on('data', async event => {
//   const { from, to, amount, date, nonce, signature } = event.returnValues;

//   const tx = bridgeBsc.methods.mint(from, to, amount, nonce, signature);
//   const [gasPrice, gasCost] = await Promise.all([
//     web3Bsc.eth.getGasPrice(),
//     tx.estimateGas({from: admin}),
//   ]);
//   const data = tx.encodeABI();
//   const txData = {
//     from: admin,
//     to: bridgeBsc.options.address,
//     data,
//     gas: gasCost,
//     gasPrice
//   };
//   const receipt = await web3Bsc.eth.sendTransaction(txData);
//   console.log(`Transaction hash: ${receipt.transactionHash}`);
//   console.log(`
//     Processed transfer:
//     - from ${from} 
//     - to ${to} 
//     - amount ${amount} tokens
//     - date ${date}
//     - nonce ${nonce}
//   `);
// });


// const BridgeEth = artifacts.require('./BridgeEth.sol');

// const privKey = 'priv key of sender';

// module.exports = async done => {
//   const nonce = 1; //Need to increment this for each new transfer
//   const accounts = await web3.eth.getAccounts();
//   const bridgeEth = await BridgeEth.deployed();
//   const amount = 1000;
//   const message = web3.utils.soliditySha3(
//     {t: 'address', v: accounts[0]},
//     {t: 'address', v: accounts[0]},
//     {t: 'uint256', v: amount},
//     {t: 'uint256', v: nonce},
//   ).toString('hex');
//   const { signature } = web3.eth.accounts.sign(
//     message, 
//     privKey
//   ); 
//   await bridgeEth.burn(accounts[0], amount, nonce, signature);
//   done();
// }