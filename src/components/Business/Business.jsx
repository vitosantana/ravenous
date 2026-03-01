import styles from './Business.module.css';

function Business({ imageSrc, name, address, city, state, zipCode, category, rating, reviewCount }) {
    return (
       <div className={styles.business}>
        <div className={styles.imageContainer}>
            <img src={imageSrc || "/placeholder.png"} alt={name} />
            
            </div>
        <h2 className={styles.name}>{name}</h2>
        
        <div className={styles.info}>
        <div className={styles.address}>
            <p>{address}</p>
            <p>{city}, {state} {zipCode}</p>
        </div>
        <div className={styles.reviews}>
            <p className={styles.category}>{category}</p>
            <p className={styles.rating}>{rating} stars</p>
            <p className={styles.reviewCount}>{reviewCount} reviews</p>
            
        </div>
       </div>
       </div>
    );
}

export default Business;