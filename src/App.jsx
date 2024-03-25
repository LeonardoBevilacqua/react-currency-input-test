import { useState } from "react";
import CurrencyInput from "./input";

function App() {
  const [balance, setBalance] = useState(12.01);
  const [balance2, setBalance2] = useState("12,01");

  function handleCurrencyInputChange(event) {
    console.log("setBalance2", event.target.value);
    setBalance2(event.target.value);

    const onlyDigitsValue = event.target.value
      .replace(".", "")
      .replace(",", "")
      .replace(/\D/g, "");
    const result = parseFloat(onlyDigitsValue) / 100;
    console.log(result);
    setBalance(result);
  }

  function handleNumberChange(event) {
    console.log("setBalance1", event.target.value);
    setBalance(Number(event.target.value));
  }

  return (
    <>
      <h1>Hello world</h1>
      {balance2}
      <CurrencyInput value={balance2} onChange={handleCurrencyInputChange} />
      {balance}
      <input
        type="number"
        min="0.01"
        step="0.01"
        onChange={handleNumberChange}
        value={balance}
      />
    </>
  );
}

export default App;
