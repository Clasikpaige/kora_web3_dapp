import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="https://randomhathacking.hashnode.dev/?a=create-web3-dapp" target="_blank">
        <img className={styles.alchemy_logo} src="https://www.dropbox.com/s/xesd76qc9wjs1oj/Photo%2005-06-2023%2C%202%2048%2024%20AM.jpg?raw=1" alt="Logo"></img>
      </a>
      <ConnectButton></ConnectButton>
    </nav>
  );
}
