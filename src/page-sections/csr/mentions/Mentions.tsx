import ContentList from '@/components/ContentList';
import styles from './Mentions.module.scss';

/// Helpers
import { smallListContent, heading } from './data';

/// Components
import CustomContent from '@/components/CustomContent';


const Mentions = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <CustomContent content={heading} maxWidth={true}/>
                
                <ContentList content={smallListContent}/>
            </div>
        </div>
    );
}
 
export default Mentions;