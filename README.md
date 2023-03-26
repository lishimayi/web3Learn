# web3Learn

<!-- test -->

## 学习前的一些基础知识

- [GAS 和 Fees](https://ethereum.org/en/developers/docs/gas/)
- 1 ETH = 10 0000 0000 Gwei
- 1 Gwei = 10 0000 0000 Wei
- [ETH Gas Station](https://ethgasstation.info/)

- [Solidity document](https://docs.soliditylang.org/en/latest/index.html)

## 编译 solidity

- 首先安装 yarn, 它是 npm 的基础上开发的一个包管理工具，更好用点。
- [安装 yarn 链接](https://yarnpkg.com/getting-started/install)
- 安装 [solc-js](https://github.com/ethereum/solc-js) 库,用来编译 solidity
  ```
  yarn add solc@0.8.7-fixed
  ```
- 编译命令

```
yarn soljs --abi --bin --include-path node_modules/ --base-path . xxx.sol
```

- 通过 ether.js 发送 raw 交易

```
const tx = {
    nonce: 5,// 这里nonce先写死，后面获取即时nonce，它用于标记交易的唯一性，gasPrice: 200 0000 0000,// Wei
    gasLimit: 1 0000 00,
    to: null, // 部署合约，
    value: 0,//
    data: "binary data flow",// abi二进制流
    chainId:1,// eth main net
}
// 这里的签名下一步未用到
const signedTxResponse = await wallet.signTransaction(tx);
// 发送交易
const sentTxResponse = await wallet.sendTransaction(tx);
await sentTxResponse.wait(1)// 等待一个区块，以确保区块确认。交易真正通过

//上面的nonce 可以用接口获取
const nonce = await wallet.getTransactionCount();

// 所以上面的tx 可以换成这样
const tx = {
    nonce: nonce,//
    gasPrice: 200 0000 0000,// Wei
    gasLimit: 1 0000 00,
    to: null, // 部署合约，
    value: 0,//
    data: "binary data flow",// abi二进制流
    chainId:1,// eth main net
}
```

- [ethers.js 监听事件](https://docs.ethers.org/v5/getting-started/#getting-started--events)

- 下 bid 单

```
Order

Trader:
Account 12
Side:
0
MatchingPolicy:
0x000...D232
Collection:

BoredApeYachtClub
TokenId:
0
Amount:
1
PaymentToken:
0x000...87Ac
Price:
10000000000000000
ListingTime:
1677159614
ExpirationTime:
1708695614
Fees:
Salt:
78857370932473942567278086986961980197
ExtraParams:
0x01
Nonce:
0
```
