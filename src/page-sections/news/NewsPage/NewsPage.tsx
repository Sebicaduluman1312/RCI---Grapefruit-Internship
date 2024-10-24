import styles from './NewsPage.module.scss';

/// Helpers
import { propsPagination } from './data';
/// Components
import Tag from '@/components/Tag';
import CustomPagination from '@/components/CustomPagination';


const NewsPage = () => {


    return ( 
        <div className={styles.wrapper}>
            <div className="container">

                <Tag label='news' />
                <h2 id='titleNews'>
                    Get the latest news, press releases, and announcements, 
                    offering expert insights into industry trends:
                </h2>

                <CustomPagination {...propsPagination}/>
                            
            </div>
        </div>
    );
}
 
export default NewsPage;