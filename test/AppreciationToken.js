const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("AppreciationToken", function () {
  it("Should increase balance of token minter when they mint a token", async function () {
    const [owner, signer1] = await ethers.getSigners();
    const AppreciationToken = await ethers.getContractFactory("AppreciationToken");
    const aprToken = await AppreciationToken.deploy("ETHAmsterdam 2022 DeSci Day Appreciation Token", "DESCIDAYAPPRECIATIONTOKEN");
    await aprToken.deployed();

    let balanceBefore = await aprToken.balanceOf(owner.address)
    expect(balanceBefore).to.equal(0)
    await aprToken.mintTo(owner.address, "name", "location", "message")
    let balanceAfter = await aprToken.balanceOf(owner.address)
    expect(balanceAfter).to.equal(1)
  });
});
