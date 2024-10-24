import styles from './Partners.module.scss';

/// Helpers
import { contentClients, sideImageClients } from './data';

/// Components
import Tag from '@/components/Tag';
import SideImage from '@/components/SideImage';
import CustomContent from '@/components/CustomContent';

const Partners = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container">

                <Tag label='partners'/>

                <div className={styles.content}>
                    <CustomContent content={contentClients}/>
                    <SideImage {...sideImageClients} />
                </div>
                
            </div>
        </div>
    );
}
 
export default Partners;