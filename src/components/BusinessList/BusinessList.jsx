import Business from '../Business/Business';
import styles from './BusinessList.module.css';

function BusinessList({ businesses }) {
    return (
        <div className={styles.list}>
       {businesses.map((business) => (
        <Business
        key={business.id}
        business={business}
    
        />
      ))}
        
        </div>
    );
}

export default BusinessList;