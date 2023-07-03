const { deployments, network, ethers } = require("hardhat");

module.exports = async function ({ getNamedAccounts, deployments }) {
  console.log(
    "======================================================================================================================"
  );

  const { deploy, logs } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainid = network.config.chainId;

  const donations = await deploy("donations", {
    from: deployer,
    args: [],
    log: true,
    waitConfirmations: 1,
  });

  console.log("success");
  console.log(
    "======================================================================================================================"
  );

  module.exports.tags = ("all", "brighId");
};

//   Compiled 2 Solidity files successfully
// ======================================================================================================================deploying "donations" (tx: 0x76bec343907ac199d59dcb9dc3d25fd578f3498f2546fc84af5221b12e1e9e71)...: deployed at 0x9c98c79dFBb3F3d245d1c6DeD063a3A43dA9E85d with 986503 gas
// success
// ======================================================================================================================
// PS C:\Users\sneha\google-solutions-challenge\hardhar_solidity _backend>
