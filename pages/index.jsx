import React, { useState } from "react";
import homeStyles from "../styles/Home.module.css";
import Container from "../components/Container";
import Button from "../components/Button";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleJoinWaitlist = () => {
    setShowContent(true);
  };

  return (
    <div className={homeStyles.container}>
      <Container>
        {showContent ? (
          <div>
            <h1>Welcome to Kora Dapp</h1>
            <p>A high dynamic UI dApp for managing and trading coins.</p>
            <p>Discover a new way to trade and invest in cryptocurrencies with Kora.</p>
            <p>Join our waitlist to be the first to experience our innovative features:</p>
            <ul>
              <li>Real-time market data and analytics</li>
              <li>Secure and reliable transactions</li>
              <li>Advanced trading tools and charts</li>
              <li>Access to a wide range of cryptocurrencies</li>
            </ul>
          </div>
        ) : (
          <div>
            <h1>Welcome to Kora Dapp</h1>
            <p>A high dynamic UI dApp for managing and trading coins.</p>
            <Button className={homeStyles.joinButton} onClick={handleJoinWaitlist}>
              Join Waitlist
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
}
