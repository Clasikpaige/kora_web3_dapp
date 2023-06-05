import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://randomhathacking.hashnode.dev/?a=create-web3-dapp" target={"_blank"}>
				<img className={styles.alchemy_logo} src="/logo.png"></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
