import styles from './Initiatives.module.scss';

/// Helpers
import { contentCsr, sideImageCsr } from './data';

/// Components
import Tag from '@/components/Tag';
import CustomContent from '@/components/CustomContent';
import SideImage from '@/components/SideImage';
import Brochure from '@/components/Brochure';

const Initiatives = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">

                <Tag label='csr initiatives'/>

                <div className={styles.content}>
                    <CustomContent content={contentCsr}/>

                    <SideImage {...sideImageCsr} />
                </div>

                <div className={styles.brochure}>
                    <Brochure downloadLink='/'/>
                </div>

            </div>
        </div>
    );
}
 
export default Initiatives;