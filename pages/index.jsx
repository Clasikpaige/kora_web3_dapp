import { useState } from "react";
import styles from "../styles/Home.module.css";
import InstructionsComponent from "../components/InstructionsComponent";

export default function Home() {
  const [coinBalance, setCoinBalance] = useState(0);
  const [buyAmount, setBuyAmount] = useState(0);

  const handleBuyCoins = () => {
    // Logic for buying coins
    // Update the coin balance and perform necessary operations
    setCoinBalance(coinBalance + buyAmount);
    setBuyAmount(0); // Reset the buy amount input field
  };

  return (
    <div>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>

        <div>
          <h2>Buy Coins</h2>
          <input
            type="number"
            value={buyAmount}
            onChange={(e) => setBuyAmount(parseInt(e.target.value))}
          />
          <button onClick={handleBuyCoins}>Buy</button>
        </div>

        <div>
          <h2>Coin Balance: {coinBalance}</h2>
          {/* Display the user's coin balance */}
        </div>
      </main>
    </div>
  );
}
