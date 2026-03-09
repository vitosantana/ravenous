import styles from './Business.module.css';

function Business({ business }) {
    return (
       <div className={styles.business}>
        <div className={styles.imageContainer}>
            <img src={business.imageSrc || "/placeholder.png"} alt={business.name} />
            
            </div>
        <h2 className={styles.name}>{business.name}</h2>
        
        <div className={styles.info}>
        <div className={styles.address}>
            <p>{business.address}</p>
            <p>{business.city}, {business.state} {business.zipCode}</p>
        </div>
        <div className={styles.reviews}>
            <p className={styles.category}>{business.category}</p>
            <p className={styles.rating}>{business.rating} stars</p>
            <p className={styles.reviewCount}>{business.reviewCount} reviews</p>
            
        </div>
       </div>
       </div>
    );
}

export default Business;