// App.js
import './App.css';

function App() {
  return (
    <div className='app'>
      <div className='stock-info-list'>
        <div className='stock-info'>
          <div className='name'>AMZN</div>
          <div className='price-info'>
            <div className='price'>$122.34</div>
            <div className='stat positive'>+0.12%</div>
          </div>
        </div>
        <div className='stock-info'>
          <div className='name'>GOOGL</div>
          <div className='price-info'>
            <div className='price'>$101.47</div>
            <div className='stat positive'>+0.29%</div>
          </div>
        </div>
        <div className='stock-info'>
          <div className='name'>MSFT</div>
          <div className='price-info'>
            <div className='price'>$245.06</div>
            <div className='stat positive'>+1.08%</div>
          </div>
        </div>
        <div className='stock-info'>
          <div className='name'>ORCL</div>
          <div className='price-info'>
            <div className='price'>$68.38</div>
            <div className='stat positive'>+0.46%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;