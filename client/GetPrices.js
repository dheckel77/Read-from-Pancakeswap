const ethers = require("ethers");
const { addressFactory, addressRouter,addressFrom,addressTo } = require("./AddressList");

const { erc20ABI, factoryABI, routerABI, pairABI } = require("./AbiList");

// Standard Provider
const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");

// Connect to Factory
const contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);

// Connect to Router
const contractRouter = new ethers.Contract(addressRouter, routerABI, provider);

// Call the Blockchain
const getPrices = async (amountInHuman) => {
   // Convert the amount
   const contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);
   const decimals = await contractToken.decimals();
   console.log(decimals);
};

const amountInHuman = "500";
getPrices(amountInHuman);

// console.log(contractRouter);
