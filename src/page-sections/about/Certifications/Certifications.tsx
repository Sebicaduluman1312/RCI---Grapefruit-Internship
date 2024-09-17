import styles from './Certifications.module.scss';

/// Helpers
import { contentCertifications } from './data';

/// Components
import Tag from '@/components/Tag';
import CustomContent from '@/components/CustomContent';
import IsoList from '@/components/IsoList';


const Certifications = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Tag label='Certifications' />

                <div className={styles.margin}>
                    <CustomContent content={contentCertifications} maxWidth={true}/>
                </div>

                <IsoList />
            </div>
        </div>
    );
}
 
export default Certifications;