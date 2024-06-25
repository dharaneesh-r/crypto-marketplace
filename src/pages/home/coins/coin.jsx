import { useParams } from 'react-router-dom'
import './coin.css'
import { useContext, useEffect, useState } from 'react';
import { coincontext } from '../../../context/CoinContext';

const Coin = () => {

  const {coinid} = useParams(); //to display coin id using useParams
  const [coinData, setCoinData] = useState();
  const {currency, coins} = useContext(coincontext)

  //GETTING DETAILS FROM COINDATA API
  const FetchCoinData = () => {
    const options = {
      method: 'GET',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Do7EnttBcvugpXWq1NWwLzib'}
    };
    
    fetch(`https://api.coingecko.com/api/v3/coins/${coinid}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  }

  
  useEffect(() => {
    FetchCoinData();
  },[currency])

  if(coinData){
    return (
      <div className='coin'>
        <div className="coin-name">
          <p className='title'> 
          <sub><img src={coinData.image.large} className='image'/></sub> <b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
          <br />
          <p className='description'>{coinData.description.en}</p>  
          <br />
          <div className='links'>
            <a href = {coinData.links.homepage}>{coinData.links.homepage}</a>
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    )
}

}

export default Coin