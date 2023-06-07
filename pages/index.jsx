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
            <div className={styles.featureContainer}>
              <h2 className={styles.featureHeader}>Our Vision</h2>
              <p className={styles.featureText}>
                Kora is committed to empowering individuals to take control of their financial future through the power of
                decentralized finance. We envision a world where everyone has equal access to innovative financial services
                and the ability to participate in the global economy, regardless of their location or background.
              </p>
            </div>
            <div className={styles.featureContainer}>
              <h2 className={styles.featureHeader}>Our Features</h2>
              <p className={styles.featureText}>
                At Kora, we offer a comprehensive suite of features designed to provide a seamless and secure trading
                experience. From real-time market data and advanced analytics to intuitive user interfaces and a wide range
                of supported cryptocurrencies, we strive to meet the diverse needs of our users. Our platform is backed by
                cutting-edge technology, ensuring fast and reliable transactions while maintaining the highest standards of
                security.
              </p>
            </div>
            <div className={styles.featureContainer}>
              <h2 className={styles.featureHeader}>More</h2>
              <p className={styles.featureText}>
                With Kora, you can also take advantage of our AI-powered stock analysis tool, which provides valuable insights
                and recommendations to help you make informed investment decisions. Our goal is to empower individuals with
                the tools and knowledge needed to succeed in the dynamic world of cryptocurrency trading.
              </p>
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
