import VerifiedSvg from '../../../../public/icons/VerifiedSvg';
import styles from './Values.module.scss';

/// Helpers
import { valuesList } from './data';

/// Components
import Tag from '@/components/Tag';

const Values = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Tag label="values" />

                <div className={styles.content}>
                    {
                        valuesList.map((value, index) => (
                            <div key={index} className={styles.value}>
                                <VerifiedSvg />

                                <h3>{value.value}</h3>

                                <p>{value.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Values;