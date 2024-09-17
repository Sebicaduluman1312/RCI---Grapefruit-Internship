import styles from './KeyFacts.module.scss';

/// Helpers
import { statistics } from "@/components/Statistics/data";
import { customContentKeyFacts } from './data';

/// Components
import Tag from '@/components/Tag';
import Statistics from "@/components/Statistics/Statistics";
import CustomContent from '@/components/CustomContent';



const KeyFacts = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Tag label='Key Facts' />
                
                <div className={styles.margin}>
                    <CustomContent content={customContentKeyFacts} maxWidth={true}/>
                </div>

                <Statistics data={statistics}/>                
            </div>            
        </div>
    );
}
 
export default KeyFacts;