// CG-Do7EnttBcvugpXWq1NWwLzib

import { createContext, useEffect, useState } from "react";

export const coincontext = createContext(); //has created a context hook

const Coincontextprovider= (props) => {
    //default currency
    const [coins, setCoins] = useState([])
    const [currency, setCurrency] = useState({
        name : 'usd',
        Symbol : '$'
    }) 

    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Do7EnttBcvugpXWq1NWwLzib'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setCoins(response))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        fetchData()
    },[currency])
    
    const contextValue = {
        coins,
        currency,
        setCurrency
    }

    return (
        <coincontext.Provider value ={contextValue}>
            {props.children}
        </coincontext.Provider>
    )
}

export default Coincontextprovider