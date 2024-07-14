import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./crypto-dashboard.css"

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://api.coinranking.com/v2/coins'
      );
      setCryptoData(response.data.data.coins);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Crypto List</h1>
      <ul>
        {cryptoData.map((coin) => (
          <li key={coin.id}>{coin.name} {coin.price} </li> 
        ))}
      </ul>
    </div>
  );
};

export default CryptoList;