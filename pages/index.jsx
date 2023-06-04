import { useState } from "react";
import styles from "../styles/Home.module.css";
import Container from "../components/container";
import Button from "../components/button";
import Input from "../components/Input";
import containerStyles from "../components/container.module.css"; // Updated import statement with lowercase "s"

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
    <div className={styles.container}>
      <Container>
        <h1>Welcome to Kora Dapp</h1>
        <p>A high dynamic UI dApp for managing and trading coins.</p>
      </Container>

      <Container>
        <h2>Buy Coins</h2>
        <Input
          type="number"
          placeholder="Enter amount"
          value={buyAmount}
          onChange={(e) => setBuyAmount(parseInt(e.target.value))}
        />
        <Button onClick={handleBuyCoins}>Buy</Button>
      </Container>

      <Container>
        <h2>Coin Balance: {coinBalance}</h2>
        {/* Display the user's coin balance */}
      </Container>
    </div>
  );
}
