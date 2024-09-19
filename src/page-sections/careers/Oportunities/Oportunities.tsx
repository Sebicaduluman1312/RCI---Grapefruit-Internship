import styles from './Oportunities.module.scss';

/// Helpers
import { contentCareer, sideImageCompany } from './data';

/// Components
import Tag from '@/components/Tag';
import CustomContent from '@/components/CustomContent';
import SideImage from '@/components/SideImage';


const Oportunities = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Tag label='career and opportunities'/>
                <div className={styles.content}>
                    <CustomContent content={contentCareer}/>
                    <SideImage {...sideImageCompany} />
                </div>
            </div>
        </div>    
    );
}
 
export default Oportunities;