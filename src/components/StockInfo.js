// components/StockInfo.js
import './StockInfo.css'

function StockInfo({ name, price, diff }) {
  const type = diff > 0 ? 'positive' : 'negative';
  const signedDiff = diff > 0 ? `+${diff}` : diff;
  return (
    <div className='stock-info'>
      <div className='name'>{name}</div>
      <div className='price-info'>
        <div className='price'>${price}</div>
        <div className={`stat ${type}`}>{signedDiff}%</div>
      </div>
    </div>
  );
}

export default StockInfo
