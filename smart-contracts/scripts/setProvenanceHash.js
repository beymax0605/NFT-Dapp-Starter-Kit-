require("dotenv").config();
const hre = require("hardhat");

async function main() {
  const PROVENANCE_HASH = process.env.PROVENANCE_HASH;
  if (!PROVENANCE_HASH) {
    console.log("BASE_URI is required. Please add it to your environment.");
    return;
  }

  const TechnoFeudal = await hre.ethers.getContractFactory("TechnoFeudal");
  const nft = await TechnoFeudal.attach(
    process.env.CONTRACT_ADDRESS // The deployed contract address
  );
  console.log("TechnoFeudal attached to:", nft.address);

  console.log("setting Provenance Hash..", PROVENANCE_HASH);

  const res = await nft.setProvenanceHash(PROVENANCE_HASH);

  console.log("set Provenance Hash", res);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
