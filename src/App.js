import React,{useEffect, useState} from 'react';
import './App.css';


const BASE_URL = "https://api.exchangeratesapi.io/latest"

function App() {

  const [currencyOptions, setCurrencyOptions]=useState([])
  console.log(currencyOptions)
  const[fromCurrency,setFromCurrency]= useState()
  const[toCurrency, setToCurrency] =useState()
  const[amount, setAmount]= useState(1)
  const[amountInfromCurrency,setaAmountInFromCurrency]=useState(true)


  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      const firstCurrency =Object.keys(data.rates)[0]
      setCurrencyOptions([data.base,...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      })
     
  },[])
  
  return (
    <>
      <h1>convert</h1>
      <currencyRow
        currencyOptions={currencyOptions}
        selectedCurrency= {fromCurrency}
        
      />
      <h3>
      <input type="number" />
        <select>
          {currencyOptions.map(option => (
            <option key={option} value ={option}>{option}</option> 
          ))}
      </select>
      </h3>

      <div className="equal">=</div>
      <currencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
      />

      <h4>
        <input type="number" />
        <select>
          {currencyOptions.map(option => (
          <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </h4>
   </>
  );
}

export default App;
