import styles from "./searchBar.module.css";

export default function SearchBar() {
	return (
		<form action="/" method="get">
			<label htmlFor="header-search">
				<span className={styles.visuallyHidden}>
					Search for a project
				</span>
			</label>
			<input
				type="text"
				id="header-search"
				placeholder="Search blog posts"
				name="s"
			/>
			<button type="submit">Search</button>
		</form>
	);
}
