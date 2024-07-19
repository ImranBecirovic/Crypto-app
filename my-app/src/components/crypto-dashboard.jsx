import React, { useState, useEffect } from "react";
import axios from "axios";
import "./crypto-dashboard.css";

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.coinranking.com/v2/coins");
      setCryptoData(response.data.data.coins);
    };

    fetchData();
  }, []);

  return (
    <div className="page-warp">
    <div className="crypto-page">
      <h3>Top 10 <span className="redtext">List</span></h3>
      <div className="coin-content" >
            <div className="coin-rank">Rank</div>
            <div className="coin-name">Name</div>
            <div className="coin-price">Price</div>
            <div className="coin-change">Change</div>
          </div>
        {cryptoData.map((coin) => (
          <div className="coin-content" key={coin.id}>
            <div className="coin-rank">{coin.rank}</div>
            <div className="coin-name">{coin.name}</div>
            <div className="coin-price">{coin.price}</div>
            <div className="coin-change">{coin.change}</div>
          </div>
          
        ))}
    </div>
    </div>
  );
};

export default CryptoList;
