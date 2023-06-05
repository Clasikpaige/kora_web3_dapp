import { useState } from "react";
import styles from "../styles/Home.module.css";
import Container from "../components/container";
import Button from "../components/button";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleJoinWaitlist = () => {
    setShowContent(true);
  };

  return (
    <div className={styles.container}>
      <Container>
        <h1 className={styles.text}>Welcome to Kora Dapp</h1>
        <p className={styles.text}>A high dynamic UI dApp for managing and trading coins.</p>
        {showContent ? (
          <div>
            <p className={styles.text}>Discover a new way to trade and invest in cryptocurrencies with Kora.</p>
            <p className={styles.text}>Join our waitlist to be the first to experience our innovative features:</p>
            <ul className={styles.text}>
              <li>Real-time market data and analytics</li>
              <li>Secure and reliable transactions</li>
              <li>Advanced trading tools and charts</li>
              <li>Access to a wide range of cryptocurrencies</li>
            </ul>
          </div>
        ) : (
          <div>
            <Button className={styles.joinButton} onClick={handleJoinWaitlist}>
              Join Waitlist
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}
