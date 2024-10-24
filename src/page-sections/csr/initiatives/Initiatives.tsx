import styles from './Initiatives.module.scss';

/// Helpers
import { contentCsr, sideImageCsr, bigListContent } from './data';

/// Components
import Tag from '@/components/Tag';
import CustomContent from '@/components/CustomContent';
import SideImage from '@/components/SideImage';
import Brochure from '@/components/Brochure';
import ContentList from '@/components/ContentList';
import CheckedIcon from '../../../../public/icons/CheckedIcon';

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

                <ContentList content={bigListContent} customIcon={CheckedIcon}/>

            </div>
        </div>
    );
}
 
export default Initiatives;