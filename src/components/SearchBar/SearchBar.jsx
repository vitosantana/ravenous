import { useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
    const [term, setTerm] = useState('');
    const [location, setLocation] = useState('');
    const [sortBy, setSortBy] = useState('best_match');

    const handleSortByChange = (sortOption) => {
        setSortBy(sortOption);
    };

    const handleTermChange = (event) => {
        setTerm(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSearch = () => {
        console.log(`Searching Yelp with ${term}, ${location}, ${sortBy} `);
    };
    return (
        <div className={styles.searchBar}>
            <div className={styles.sortOptions}>
                <button 
                className={sortBy === "best_match" ? styles.active : ""}
                onClick={() => handleSortByChange("best_match")}
                >
                Best Match
                </button>
                <button 
                className={sortBy === "rating" ? styles.active : ""}
                onClick={() => handleSortByChange("rating")}
                >
                Highest Rated
                </button>
                  <button 
                className={sortBy === "review_count" ? styles.active : ""}
                onClick={() => handleSortByChange("review_count")}
                >
                Most Reviewed
                </button>
                </div>

        <div className={styles.fields}>
        <input 
        placeholder="Search Businesses"
        value={term}
        onChange={handleTermChange}
        />
        <input 
        placeholder="Where?"
        value={location}
        onChange={handleLocationChange}
         />
        </div>
        <button className={styles.searchButton}onClick={handleSearch}>Let's Go</button>
        </div>
    );
}

export default SearchBar;