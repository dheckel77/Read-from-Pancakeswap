const erc20ABI = ["function decimals() external view returns (uint8)"];

const factoryABI = ["function getPair(address tokenA, address tokenB) external view returns (address pair)"];

const pairABI = [
   "function token0() external view returns (address)",
   "function token1() external view returns (address)",
   "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
   // "function totalSupply() external view returns (uint256)",
   // "function balanceOf(address account) external view returns (uint256)",
   // "function allowance(address owner, address spender) external view returns (uint256)",
   // "function transfer(address to, uint256 amount) external returns (bool)",
];

const routerABI = ["function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)"];

module.exports = { erc20ABI, factoryABI, pairABI, routerABI }
