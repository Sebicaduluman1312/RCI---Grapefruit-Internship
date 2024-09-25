import styles from './FinanceServices.module.scss';

/// Helpers
import { sideImageFinance, contentData } from './data';

/// Components
import Tag from '@/components/Tag';
import CustomContent from '@/components/CustomContent';
import SideImage from '@/components/SideImage';

const FinanceServices = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Tag label='finance services' />

                <div className={styles.content}>
                    <CustomContent content={contentData}/>

                    <SideImage {...sideImageFinance}/>
                </div>

            </div>
        </div>
    );
}
 
export default FinanceServices;