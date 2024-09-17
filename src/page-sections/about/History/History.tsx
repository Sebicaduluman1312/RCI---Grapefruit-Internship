import styles from './History.module.scss';

/// Helpers
import { btnData, customContentHistory } from './data';

/// Components
import CustomContent from '@/components/CustomContent';
import BaseButton from '@/components/BaseButton';


const History = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <CustomContent content={customContentHistory} maxWidth={true}/>

                <BaseButton {...btnData}/>

            </div>
        </div>
    );
}
 
export default History;