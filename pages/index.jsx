import React from "react";
import homeStyles from "../styles/Home.module.css";
import Container from "../components/container";
import Button from "../components/button";

export default function Home() {
  const handleJoinWaitlist = () => {
    // Logic for joining the waitlist
    // Implement the necessary functionality here
    console.log("Join waitlist");
  };

  return (
    <div className={homeStyles.container}>
      <Container>
        <h1>Welcome to Kora Dapp</h1>
        <p>A high dynamic UI dApp for managing and trading coins.</p>
        <p>Explore the world of decentralized finance with Kora.</p>
        <p>Powered by Web3 technology.</p>
      </Container>

      <Container>
        <h2>Join the Waitlist</h2>
        <p>Be the first to know when Kora is launched!</p>
        <Button className={homeStyles.joinButton} onClick={handleJoinWaitlist}>
          Join Waitlist
        </Button>
      </Container>
    </div>
  );
}
