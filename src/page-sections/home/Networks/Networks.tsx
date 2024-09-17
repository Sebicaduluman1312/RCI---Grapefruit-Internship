import styles from './Networks.module.scss';

// HELPERS
import { btnData, headingDataNetworks, logos } from './data';

// COMPONENTS
import Heading from '@/components/Heading';
import BaseButton from '@/components/BaseButton';
import ColabLogos from '@/components/ColabLogos';


const Networks = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Heading data={headingDataNetworks}/>
                <ColabLogos logos={logos}/>
                <BaseButton {...btnData} />
            </div>
        </div>
    );
}
 
export default Networks;