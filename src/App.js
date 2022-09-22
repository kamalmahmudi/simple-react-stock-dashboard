// App.js
import StockInfo from './components/StockInfo';

import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='stock-info-list'>
        <StockInfo name='AMZN' price={122.34} diff={0.12} />
        <StockInfo name='GOOGL' price={101.47} diff={0.29} />
        <StockInfo name='MSFT' price={245.06} diff={1.08} />
        <StockInfo name='ORCL' price={63.38} diff={0.46} />
      </div>
    </div>
  );
}

export default App;