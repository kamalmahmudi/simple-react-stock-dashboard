// services/stock.js
export const fetchStockInfo = async name => {
  const price = 100;
  const diff = 1;
  return { name, price, diff };
}
