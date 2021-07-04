// styles
import styles from "./navbar.module.css";

// imported components
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";

export default function NavigationBar() {
	return (
		<Navbar className={styles.navbar}>
			<Navbar.Brand
				className={`${styles.navLink} ${styles.brandName} mr-auto`}
			>
				MSS Medical Research Association
			</Navbar.Brand>
			<Link href="/" passHref>
				<span className={`${styles.navLink}`}>
					<p className={styles.pagesLink}>Home</p>
				</span>
			</Link>
			<Link href="/projects" passHref>
				<span className={`${styles.navLink}`}>
					<p className={styles.pagesLink}>Projects</p>
				</span>
			</Link>
			<Link href="/register" passHref>
				<span className={`${styles.navLink}`}>
					<p className={styles.pagesLink}>Register</p>
				</span>
			</Link>
			<Link href="/" passHref>
				<span className={`${styles.navLink}`}>
					<p className={styles.pagesLink}>About</p>
				</span>
			</Link>
			<Link href="/" passHref>
				<span className={`${styles.navLink}`}>
					<p className={styles.pagesLink}>Meet the Team</p>
				</span>
			</Link>
			<Link href="/" passHref>
				<span className={`${styles.navLink}`}>
					<p className={styles.pagesLink}>Resources</p>
				</span>
			</Link>
		</Navbar>
	);
}
