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

* [ethers.js 监听事件](https://docs.ethers.org/v5/getting-started/#getting-started--events)


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




