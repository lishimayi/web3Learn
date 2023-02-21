# web3Learn
<!-- test -->

## 学习前的一些基础知识
* [GAS 和 Fees](https://ethereum.org/en/developers/docs/gas/)
* 1 ETH = 10 0000 0000 Gwei
* 1 Gwei = 10 0000 0000 Wei
* [ETH Gas Station](https://ethgasstation.info/) 

* [Solidity document](https://docs.soliditylang.org/en/latest/index.html)

## 编译solidity
* 首先安装 yarn, 它是npm的基础上开发的一个包管理工具，更好用点。
* [安装yarn链接](https://yarnpkg.com/getting-started/install)
* 安装 [solc-js](https://github.com/ethereum/solc-js) 库,用来编译solidity
    ```
    yarn add solc@0.8.7-fixed
    ```
* 编译命令
```
yarn soljs --abi --bin --include-path node_modules/ --base-path . xxx.sol
```




