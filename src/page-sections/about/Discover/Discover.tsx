import styles from './Discover.module.scss';

/// Helpers
import { titleDiscover, qualities } from './data';

/// Components
import CustomContent from '@/components/CustomContent';
import Qualities from '@/components/Qualities';


const Discover = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <CustomContent content={titleDiscover} maxWidth={true}/>

                <div className={styles.content}>
                    {
                        qualities.map((quality, index) => (
                            <Qualities key={index} data={quality}/>
                        ))
                    }
                </div>                
            </div>
        </div>
    );
}
 
export default Discover;