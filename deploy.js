const ethers = require("ethers");
// import { ethers } from 'ethers';

async function main() {
  // console.log(ethers);
  const provider = new ethers.providers.JsonRpcProvider("HTTP://127.0.0.1:7545");

  const wallet = new ethers.Wallet(
    "b6cf82cc16442bc00bc7becf0b4d98c636539a8eb715b4b826484fd44c4f6a1c",
    provider
  );
  console.log(wallet);
  const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("deploying please wait...");
  const contract = await contractFactory.deploy();
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });

// console.log(provider);

// const wallet = new Wallet
// console.log(pr);
