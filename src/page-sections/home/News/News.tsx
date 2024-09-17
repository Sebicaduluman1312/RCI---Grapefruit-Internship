import styles from './News.module.scss';

/// HELPERS
import { newsHeadingData, newsContent } from './data';

/// COMPONENTS
import Heading from '@/components/Heading';
import NewsList from '@/components/NewsList';
import Link from 'next/link';



const News = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.header}>
                    <Heading data={newsHeadingData}/>
                    <Link href={'/contact'}>
                        View all news
                    </Link>
                </div>
                <NewsList data={newsContent}/>
            </div>
        </div>
    );
}
 
export default News;