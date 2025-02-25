const hre = require("hardhat");

async function main() {
  const Person = await hre.ethers.getContractFactory("Person");
  const person = await Person.deploy();
  await person.deployed();

  console.log(`Contrato implantado em: ${person.address}`);

  // Chamando funções públicas
  const name = await person.name();
  console.log(`Nome: ${name}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});