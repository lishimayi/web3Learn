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

```

* ethers.js的打印
```
{
  ethers: {
    Signer: [Getter],
    Wallet: [Getter],
    VoidSigner: [Getter],
    getDefaultProvider: [Getter],
    providers: {
      Provider: [Getter],
      BaseProvider: [Getter],
      Resolver: [Getter],
      UrlJsonRpcProvider: [Getter],
      FallbackProvider: [Getter],
      AlchemyProvider: [Getter],
      AlchemyWebSocketProvider: [Getter],
      CloudflareProvider: [Getter],
      EtherscanProvider: [Getter],
      InfuraProvider: [Getter],
      InfuraWebSocketProvider: [Getter],
      JsonRpcProvider: [Getter],
      JsonRpcBatchProvider: [Getter],
      NodesmithProvider: [Getter],
      PocketProvider: [Getter],
      StaticJsonRpcProvider: [Getter],
      Web3Provider: [Getter],
      WebSocketProvider: [Getter],
      IpcProvider: [Getter],
      JsonRpcSigner: [Getter],
      getDefaultProvider: [Function: getDefaultProvider],
      getNetwork: [Getter],
      isCommunityResource: [Getter],
      isCommunityResourcable: [Getter],
      showThrottleMessage: [Getter],
      Formatter: [Getter]
    },
    BaseContract: [Getter],
    Contract: [Getter],
    ContractFactory: [Getter],
    BigNumber: [Getter],
    FixedNumber: [Getter],
    constants: {
      AddressZero: [Getter],
      NegativeOne: [Getter],
      Zero: [Getter],
      One: [Getter],
      Two: [Getter],
      WeiPerEther: [Getter],
      MaxUint256: [Getter],
      MinInt256: [Getter],
      MaxInt256: [Getter],
      HashZero: [Getter],
      EtherSymbol: [Getter]
    },
    errors: [Getter],
    logger: Logger { version: 'ethers/5.4.7' },
    utils: {
      AbiCoder: [Getter],
      defaultAbiCoder: [Getter],
      Fragment: [Getter],
      ConstructorFragment: [Getter],
      ErrorFragment: [Getter],
      EventFragment: [Getter],
      FunctionFragment: [Getter],
      ParamType: [Getter],
      FormatTypes: [Getter],
      checkResultErrors: [Getter],
      Logger: [Getter],
      RLP: [Object],
      _fetchData: [Getter],
      fetchJson: [Getter],
      poll: [Getter],
      checkProperties: [Getter],
      deepCopy: [Getter],
      defineReadOnly: [Getter],
      getStatic: [Getter],
      resolveProperties: [Getter],
      shallowCopy: [Getter],
      arrayify: [Getter],
      concat: [Getter],
      stripZeros: [Getter],
      zeroPad: [Getter],
      isBytes: [Getter],
      isBytesLike: [Getter],
      defaultPath: [Getter],
      HDNode: [Getter],
      SigningKey: [Getter],
      Interface: [Getter],
      LogDescription: [Getter],
      TransactionDescription: [Getter],
      base58: [Getter],
      base64: [Object],
      hexlify: [Getter],
      isHexString: [Getter],
      hexConcat: [Getter],
      hexStripZeros: [Getter],
      hexValue: [Getter],
      hexZeroPad: [Getter],
      hexDataLength: [Getter],
      hexDataSlice: [Getter],
      nameprep: [Getter],
      _toEscapedUtf8String: [Getter],
      toUtf8Bytes: [Getter],
      toUtf8CodePoints: [Getter],
      toUtf8String: [Getter],
      Utf8ErrorFuncs: [Getter],
      formatBytes32String: [Getter],
      parseBytes32String: [Getter],
      hashMessage: [Getter],
      namehash: [Getter],
      isValidName: [Getter],
      id: [Getter],
      _TypedDataEncoder: [Getter],
      getAddress: [Getter],
      getIcapAddress: [Getter],
      getContractAddress: [Getter],
      getCreate2Address: [Getter],
      isAddress: [Getter],
      formatEther: [Getter],
      parseEther: [Getter],
      formatUnits: [Getter],
      parseUnits: [Getter],
      commify: [Getter],
      computeHmac: [Getter],
      keccak256: [Getter],
      ripemd160: [Getter],
      sha256: [Getter],
      sha512: [Getter],
      randomBytes: [Getter],
      shuffled: [Getter],
      solidityPack: [Getter],
      solidityKeccak256: [Getter],
      soliditySha256: [Getter],
      splitSignature: [Getter],
      joinSignature: [Getter],
      accessListify: [Getter],
      parseTransaction: [Getter],
      serializeTransaction: [Getter],
      TransactionTypes: [Getter],
      getJsonWalletAddress: [Getter],
      computeAddress: [Getter],
      recoverAddress: [Getter],
      computePublicKey: [Getter],
      recoverPublicKey: [Getter],
      verifyMessage: [Getter],
      verifyTypedData: [Getter],
      getAccountPath: [Getter],
      mnemonicToEntropy: [Getter],
      entropyToMnemonic: [Getter],
      isValidMnemonic: [Getter],
      mnemonicToSeed: [Getter],
      SupportedAlgorithm: [Getter],
      UnicodeNormalizationForm: [Getter],
      Utf8ErrorReason: [Getter],
      Indexed: [Getter]
    },
    wordlists: [Getter],
    version: [Getter],
    Wordlist: [Getter]
  },
  Signer: [Getter],
  Wallet: [Getter],
  VoidSigner: [Getter],
  getDefaultProvider: [Getter],
  providers: [Getter],
  BaseContract: [Getter],
  Contract: [Getter],
  ContractFactory: [Getter],
  BigNumber: [Getter],
  FixedNumber: [Getter],
  constants: [Getter],
  errors: [Getter],
  logger: [Getter],
  utils: [Getter],
  wordlists: [Getter],
  version: [Getter],
  Wordlist: [Getter]
}
```
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
