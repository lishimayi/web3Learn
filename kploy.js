const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "HTTP://127.0.0.1:7545"
  );

  const wallet = new ethers.Wallet(
    "fa32a867db69330f716c8e39fbb7528e8463bcd7d0ee1936550932e67199d19a",
    provider
  );

  const abi = fs.readFileSync(
    "./demoBuild/demo_sol_dmeo.abi",
    "utf8"
  );

  const binary = fs.readFileSync(
    "./demoBuild/demo_sol_dmeo.bin",
    "utf8"
  );
  // console.log(binary);
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("-------------");
  console.log(contractFactory);
  console.log("-------------");
  console.log("deploying please wait...");
  const contract = await contractFactory.deploy();
  console.log("+++++++++++++++++++++");
  console.log(contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });