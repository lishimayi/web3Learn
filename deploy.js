const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "HTTP://127.0.0.1:7545"
  );

  const wallet = new ethers.Wallet(
    "81ec693f488d93836e542320c7d56bcb08e5a6db6a69ccbe0e2830f071d29902",
    provider
  );

  const abi = fs.readFileSync(
    "./blurBuild/BlurExchange_sol_BlurExchange.abi",
    "utf8"
  );

  const binary = fs.readFileSync(
    "./blurBuild/BlurExchange_sol_BlurExchange.bin",
    "utf8"
  );
  // console.log(binary);
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

  console.log("deploying please wait...");

  const contract = await contractFactory.deploy();

  console.log("deploy success");
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
