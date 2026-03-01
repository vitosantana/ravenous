import styles from './SearchBar.module.css';

function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <div className={styles.sortOptions}>
                <button className={styles.active}>Best Match</button>
                <button>Highest Rated</button>
                <button>Most Reviewed</button>
                </div>

        <div className={styles.fields}>
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
        </div>
        <button className={styles.searchButton}>Let's Go</button>
        </div>
    );
}

export default SearchBar;