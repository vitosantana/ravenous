import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import styles from './App.module.css';
const businesses = [
  {
    id: 1,
    name: "Twisted Tree Steakhouse", imageSrc: "/placeholder.png",
    address:"10701 Watson Rd",
    city: "St.Louis",
    state: "Missouri",
    zipCode: 63127,
    category:"Steakhouse",
    rating: 4.6,
    reviewCount: 3085
  },
  {
    id: 2,
    name: "Louie",
    address: "706 De Mun Ave",
    city: "St.Louis",
    state: "Missouri",
    zipCode: 63105,
    category: "Italian",
    rating: 4.8,
    reviewCount: 721
  },
  {
    id: 3,
    name: "Sado",
    address: "5201 Shaw Ave",
    city: "St.Louis",
    state: "Missouri",
    zipCode: 63110,
    category: "Japanese",
    rating: 4.6,
    reviewCount: 438 
  },
  {
    id: 4,
    name: "Flemings Prime Steakhouse & Wine Bar",
    address: "1855 S Lindbergh Blvd",
    city: "St.Louis",
    state: "Missouri",
    zipCode: 63131,
    category: "Steakhouse",
    rating: 4.6,
    reviewCount: 1400
  },
  {
    id: 5,
    name: "Braaerie by Niche",
    address: "4580 Laclede Ave",
    city: "St.Louis",
    state: "Missouri",
    zipCode: 63108,
    category: "French",
    rating: 4.6,
    reviewCount: 1500
  },
  {
    id: 6,
    name: "Oceano Bistro",
    address: "44 N Brentwood Blvd",
    city: "Clayton",
    state: "Missouri",
    zipCode: 63105,
    category: "Seafood",
    rating: 4.5,
    reviewCount: 1100
  },
  {
     id: 7,
    name: "Sugarfire Smoke House",
    address: "605 Washington Ave",
    city: "St.Louis",
    state: "Missouri",
    zipCode: 63101,
    category: "Barbecue",
    rating: 4.5,
    reviewCount: 7200
  },
  {
     id: 8,
    name: "Ballpark Village",
    address: "601 Clark Ave",
    city: "St.Louis",
    state: "Missouri",
    zipCode: 63102,
    category: "Bar",
    rating: 4.5,
    reviewCount: 5900
  }
    
]
function App() {
  return (
    <div>
      <header className={styles.header}>Ravenous</header>

      <section className={styles.hero}>
      <SearchBar />
      </section>

      <main className={styles.results}>
      <BusinessList businesses={businesses} />
      </main>
    </div>
  );
}

export default App;