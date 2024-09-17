import styles from './Company.module.scss';

/// Helpers
import { customContentCompany, sideImageCompany } from './data';

/// Components
import Tag from '@/components/Tag';
import CustomContent from '@/components/CustomContent';
import SideImage from '@/components/SideImage';


const Company = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Tag label='Company'/>
                <div className={styles.content}>
                    <CustomContent content={customContentCompany}/>
                    <SideImage {...sideImageCompany}/>
                </div>
            </div>
        </div>
    );
}
 
export default Company;