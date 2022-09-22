// App.js
import StockInfoList from './components/StockInfoList';

import './App.css';

function App() {
  return (
    <div className='app'>
      <StockInfoList stockNames={['AMZN', 'GOOGL', 'MSFT', 'ORCL']} />
    </div>
  );
}

export default App;