import styles from './Values.module.scss';

/// Helpers
import classNames from 'classnames';
import { contentValues } from './data';

/// Components
import Qualities from '@/components/Qualities';


const Values = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className={classNames("container", styles.containerInline)}>
            {
                contentValues.map((value, index) => (
                    <Qualities key={index} data={value}/>
                ))
            }
            </div>
        </div>
    );
}
 
export default Values;