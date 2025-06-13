const hre = require("hardhat");

async function main() {
  const DodgeBucks = await hre.ethers.getContractFactory("DodgeBucks");
  const token = await DodgeBucks.deploy();
  await token.deployed();
  console.log("DodgeBucks deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
