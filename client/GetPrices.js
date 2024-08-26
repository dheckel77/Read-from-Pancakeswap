const ethers = require("ethers");
const { addressFactory, addressRouter, addressFrom, addressTo } = require("./AddressList");
const { erc20ABI, factoryABI, routerABI, pairABI } = require("./AbiList");

// Standard Provider
const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");

// Connect to Factory
const contractFactory = new ethers.Contract(addressFactory, factoryABI, provider);

// Connect to Router
const contractRouter = new ethers.Contract(addressRouter, routerABI, provider);

// Call the Blockchain
const getPrices = async (amountInHuman) => {
   // Convert the amount in
   const contractToken = new ethers.Contract(addressFrom, erc20ABI, provider);
   const decimals = await contractToken.decimals();
   const amountIn = ethers.utils.parseUnits(amountInHuman, decimals).toString();
   
   // Get amounts out
   const constractToken2 = new ethers.Contract(addressTo, erc20ABI, provider);
   const decimals2 = await constractToken2.decimals();
   const amountsOut = await contractRouter.getAmountsOut(amountIn, [addressFrom, addressTo]);
   
   // Convert amounts out to human readable values
   const amountsOutHuman = amountsOut.map(amountOut => ethers.utils.formatUnits(amountsOut[1], decimals2));
   
   console.log(`Amount Out 1: ${amountsOutHuman}`);
   console.log(amountsOut);
   console.log(`Amount in: ${amountInHuman} ${addressFrom}`);
   console.log(`Amount out: ${amountsOutHuman[0]} ${addressTo}, ${amountsOutHuman[1]} ${addressFrom}`);
   
   return amountsOutHuman;
};

const amountInHuman = "500";
getPrices(amountInHuman);

// console.log(contractRouter);
