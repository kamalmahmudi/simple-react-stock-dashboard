// components/StockInfoList.js
import { useEffect, useState } from 'react';

import StockInfo from './StockInfo';

import './StockInfoList.css'

function StockInfoList() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    setStocks([
      {
        name: 'AMZN',
        price: 122.34,
        diff: 0.12,
      },
      {
        name: 'GOOGL',
        price: 101.47,
        diff: 0.29,
      },
      {
        name: 'MSFT',
        price: 245.06,
        diff: 1.08,
      },
      {
        name: 'ORCL',
        price: 63.38,
        diff: 0.46,
      },
    ]);
  }, []);
  

  return (
    <div className='stock-info-list'>
      {stocks.map(stock => <StockInfo key={stock.name} {...stock} />)}
    </div>
  );
}

export default StockInfoList
