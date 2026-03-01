import Business from '../Business/Business';
import styles from './BusinessList.module.css';

function BusinessList({ businesses }) {
    return (
        <div className={styles.list}>
       {businesses.map((restaurants) => (
        <Business
        key={restaurants.id}
        name={restaurants.name}
        address={restaurants.address}
        city={restaurants.city}
        zipCode={restaurants.zipCode}
        category={restaurants.category}
        rating={restaurants.rating}
        reviewCount={restaurants.reviewCount}
        state={restaurants.state}
        imageSrc={restaurants.imageSrc}
        />
      ))}
        
        </div>
    );
}

export default BusinessList;