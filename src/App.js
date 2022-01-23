import './App.css';
import React, { useEffect, useState } from 'react';
import DataGrid from './DataGrid';

const parserTxt = (text) => {
  const result = {
    typeTransaction: [],
    data: [],
    value: [],
    CPF: [],
    card: [],
    hour: [],
    showOwner: [],
    storeName: [],
  }
  
  const [typeTransaction, data, value, CPF, card, hour, showOwner, storeName ] = text.split('\n');
  
  result.typeTransaction = typeTransaction.slice(0, 1);
  result.data = data.slice(1,9);
  result.value = value.slice(9, 19);
  result.CPF = CPF.slice(19, 30);
  result.card = card.slice(30, 42);
  result.hour = hour.slice(42, 48);
  result.showOwner = showOwner.slice(48, 62);
  result.storeName = storeName.slice(62, 81);
  
  return result;
}

function App() {
  const [txt, setTxt] = useState('');
  useEffect(() => {
    fetch('/CNAB.txt')
    .then((response)  => response.text())
    .then((text) => {
      setTxt(parserTxt(text));
    })
  }, []);

  return <div className="App">
    <DataGrid txt={txt}/> 
  </div>;
}

export default App;
