const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "HTTP://127.0.0.1:7545"
  );

  const wallet = new ethers.Wallet(
    "433cb644e50838e4f9a784e6ae539e0c8fc026c0443fe29adfe92193d1797682",
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
  console.log("contractFactory"+contractFactory);

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
