// components/StockInfoList.js
import { useCallback, useEffect, useState } from 'react';

import { fetchStockInfo } from '../services/stock'
import StockInfo from './StockInfo';

import './StockInfoList.css'

function StockInfoList({ stockNames = [] }) {
  const [stocks, setStocks] = useState(
    stockNames.map(name => ({ name, price: 0, diff: 0 }))
  );

  const updateStocks = useCallback(async () => {
    const newStocks = [];
    for (const stockName of stockNames) {
      const newStock = await fetchStockInfo(stockName)
      newStocks.push(newStock)
    }
    setStocks(newStocks)
  }, [stockNames])

  useEffect(() => {
    updateStocks();
  }, [updateStocks]);
  

  return (
    <div className='stock-info-list'>
      {stocks.map(stock => <StockInfo key={stock.name} {...stock} />)}
    </div>
  );
}

export default StockInfoList
