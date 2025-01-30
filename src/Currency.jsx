
import React, { useEffect, useState } from "react";

const Currency = () => {
  const [currencies, setCurrencies] = useState([]);
  const [inputValue, setInputValue] = useState(0);
  const [resultValue, setResultValue] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");

  useEffect(() => {
    // Fetch available currencies on mount
    fetch("https://api.frankfurter.dev/v1/currencies")
      .then((response) => response.json())
      .then((data) => setCurrencies(Object.keys(data)));
  }, []);

  const convertCurrency = () => {
    if (fromCurrency === toCurrency) {
      alert("Choose different currencies");
      return;
    }
    fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${inputValue}&from=${fromCurrency}&to=${toCurrency}`
    )
      .then((response) => response.json())
      .then((data) => setResultValue(Object.values(data.rates)[0] || 0));
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>
      <div className="box">
        <div className="left-box">
          <select
            className="currency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
          >
            <option value="">Select Currency</option>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input
            type="number"
            id="input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>

        <div className="right-box">
          <select
            className="currency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
          >
            <option value="">Select Currency</option>
            {currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <input type="number" id="result" value={resultValue} readOnly />
        </div>
      </div>

      <div className="btn">
        <button id="btn" onClick={convertCurrency}>
          Convert
        </button>
      </div>
    </div>
  );
};

export default Currency;
