import "./home.css";
import { coincontext } from "../../context/CoinContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { coins, currency } = useContext(coincontext);
  const [displaycoin, setDisplaycoin] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setDisplaycoin(coins);
    }
  };

  const searchHandler = async (event) => {
    event.preventDefault();
    const response = await coins.filter((data) => {
      return data.name.toLowerCase().includes(search.toLowerCase());
    });
    setDisplaycoin(response);
  };

  useEffect(() => {
    setDisplaycoin(coins); //which will be display coins
  }, [coins]);

  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace
        </h1>
        <p>
          Welcome to the Worlds largest crypto marketplace. Sign up to explore
          more about crytos...
        </p>

        <form onSubmit={searchHandler}>
          <input
            type="text"
            list="coinlist"
            onChange={handleSearch}
            value={search}
            placeholder="search Cryptos..."
            required
          />

          <datalist id="coinlist">
            {coins.map((data, index) => (
              <option key={index} value={data.name} />
            ))}
          </datalist>

          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p>24H Change</p>
          <p className="market">Market Cap</p>
        </div>
        {displaycoin.slice(0, 10).map(
          (
            data,
            index //this slice represents the number of coins to be displayed
          ) => (
            <Link to={`/coin/${data.id }`} className="table-layout" key={index}>
              <p>{data.market_cap_rank}</p>
              <div>
                <img src={data.image} className="data-image" />
                <p>{data.id}</p>
              </div>
              <p>
                {currency.Symbol} {data.current_price.toLocaleString()}
              </p>
              <p
                className={
                  data.price_change_percentage_24h > 0 ? "green" : "red"
                }
              >
                {Math.floor(data.price_change_percentage_24h) / 100}
              </p>
              <p className="market">
                {currency.Symbol} {data.market_cap.toLocaleString()}
              </p>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
