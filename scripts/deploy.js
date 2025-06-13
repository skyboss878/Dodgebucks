const hre = require("hardhat");

async function main() {
  // Compile if needed
  await hre.run('compile');

  // Get the contract
  const DodgeBucks = await hre.ethers.getContractFactory("DodgeBucks");

  // Deploy the contract
  const token = await DodgeBucks.deploy();

  // Wait for deployment to finish
  await token.deployed();

  console.log("✅ DodgeBucks deployed to:", token.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
