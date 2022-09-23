// services/stock.js
const API_KEY = 'ZC8BDK2K2X59957L';

export const fetchStockInfo = async name => {
  const url = 'https://www.alphavantage.co/query' +
    '?function=TIME_SERIES_DAILY' +
    '&apikey=' + API_KEY +
    '&symbol=' + name;
  const response = await fetch(url);
  const responseJson = await response.json();
  const latest = Object.values(responseJson['Time Series (Daily)'])[0];
  const open = Number(latest['1. open']);
  const price = Number(latest['4. close']);
  const diff = ((price - open) * 100 / open);
  return { name, price, diff };
}
