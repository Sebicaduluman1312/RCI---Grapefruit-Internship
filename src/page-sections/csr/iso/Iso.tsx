import CustomContent from '@/components/CustomContent';
import styles from './Iso.module.scss';

/// Helpers
import { heading, statisticsData } from './data';

/// Components
import Statistics from '@/components/Statistics/Statistics';


const Iso = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">

                <CustomContent content={heading} maxWidth={true}/>             

                <Statistics data={statisticsData} />

            </div>
        </div>    
    );
}
 
export default Iso;