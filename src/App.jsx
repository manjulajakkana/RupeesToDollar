
import { useState } from 'react';
import './App.css';

function App() {
  // React State
  const [rupees, setRupees] = useState('');
  const [dollars, setDollars] = useState('');

  // Fixed exchange rate
  const exchangeRate = 85;

  // Convert Rupees into Dollars
  const convertCurrency = () => {
    if (rupees === '' || !Number.isFinite(Number(rupees)) || Number(rupees) < 0) {
      setDollars('Please enter a valid amount');
      return;
    }

    const result = Number(rupees) / exchangeRate;
    setDollars(result.toFixed(2));
  };

  // Reset the values
  const resetConverter = () => {
    setRupees('');
    setDollars('');
  };

  return (
    <div className="container">
      <div className="converter">

        <h1>Rupees to Dollars Converter</h1>

        <p className="subtitle">
          Convert Indian Rupees (INR) into US Dollars (USD)
        </p>

        <label>Enter Amount in Rupees (₹)</label>

        <input
          type="number"
          min="0"
          placeholder="Enter rupees"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />

        <p className="rate">
          Exchange Rate: 1 USD = ₹85
        </p>

        <button onClick={convertCurrency}>
          Convert to Dollars
        </button>

        <div className="result">
          <h2>Converted Amount</h2>
          <p>
            {dollars === ''
              ? '$ 0.00'
              : isNaN(Number(dollars))
                ? dollars
                : `$ ${dollars}`}
          </p>
        </div>

        <button className="reset" onClick={resetConverter}>
          Reset
        </button>

      </div>
    </div>
  );
}

export default App;
