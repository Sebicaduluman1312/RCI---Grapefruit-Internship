import styles from './Companies.module.scss';

/// Helpers
import { logos, carouselSettings } from './data';

/// Components
import Tag from '@/components/Tag';
import ColabLogos from '@/components/ColabLogos';


const Companies = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Tag label='companies'/>

                <ColabLogos logos={logos} settings={carouselSettings}/>                                
            </div>  
        </div>
    );
}
 
export default Companies;