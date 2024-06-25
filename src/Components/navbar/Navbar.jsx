import { useContext } from "react";
import "./navbar.css";
import { coincontext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(coincontext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", Symbol: "$" });
        break;
      }
      case "eur" : {
        setCurrency({name : 'eur', Symbol : '€'})
        break;
      }
      case "inr" : {
        setCurrency({name : 'inr', Symbol : '₹'})
        break;
      }
      default : {
        setCurrency({name : "usd", Symbol : "$"})
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src="https://imgs.search.brave.com/-Xcorz41kNhuHmVCFanL55AAUIPZ48AALpvL8WerbZg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y29pbnBhcGVyLmNv/bS9jb2lucGFwZXIv/Zl93ZWJwLGNfbGlt/aXQsd18zODQwLHFf/YXV0bzpnb29kL2Jp/dGNvaW5fYnRjX2xv/Z29fNjJjNTliODI3/ZS5wbmc"
          alt="Cryptoplace"
          className="navbar-logo"
        />
      </Link>
      <ul>
        <Link to="/"><li>HOME</li></Link>
        <Link to="/features"><li>FEATURES</li></Link>
        <Link to="/pricing"><li>PRICING</li></Link>
        <Link to="/blogs"><li>BLOGS</li></Link>
      </ul>
      <div className="navbar-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>Sign up</button>
      </div>
    </div>
  );
};

export default Navbar;
