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
      </div>
    </div>
  );
}

export default App;