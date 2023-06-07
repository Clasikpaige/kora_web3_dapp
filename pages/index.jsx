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
            <p className={styles.text}>
              Join our waitlist to be the first to experience our innovative features:</p>
            <ul className={styles.text}>
              <li>Real-time market data and analytics</li>
              <li>Secure and reliable transactions</li>
              <li>Advanced trading tools and charts</li>
              <li>Access to a wide range of cryptocurrencies</li>
              <li>AI-powered bot for stock analysis</li>
              <li>Personalized investment recommendations</li>
            </ul>
            <div className={styles.article}>
              <p className={styles.text}>
                At Kora, our vision is to empower individuals to take control of their financial future in the world of cryptocurrencies.
                We strive to provide a user-friendly platform that simplifies the complexities of trading and investing, making it accessible to everyone.
                With our real-time market data and advanced analytics, users can make informed decisions and stay ahead of the market trends.
                Our secure and reliable transaction system ensures the safety of your assets, giving you peace of mind.
                We believe in democratizing the world of cryptocurrencies, offering a wide range of options for users to explore and invest in.
                Our AI-powered bot provides intelligent stock analysis, helping users make profitable trading decisions.
                Additionally, our platform offers personalized investment recommendations based on individual goals and risk tolerance.
                Join us on this exciting journey as we revolutionize the way people trade and invest in cryptocurrencies.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <img src="https://www.dropbox.com/s/7y5wnmefqwwc970/Photo%2007-06-2023%2C%209%2040%2045%20AM.jpg?raw=1" alt="Image 1" />
              <img src="https://www.dropbox.com/s/qw3fs5jv6r6aj1n/Photo%2007-06-2023%2C%209%2042%2024%20AM.jpg?raw=1" alt="Image 2" />
            </div>
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
