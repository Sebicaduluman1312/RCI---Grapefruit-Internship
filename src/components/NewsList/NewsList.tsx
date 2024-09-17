import styles from './NewsList.module.scss';

/// HELPERS
import { NewsListProps } from './interface';
import { CarouselSettings } from './data';

/// COMPONENTS


/// EXTERNAL COMPONENTS
import { Carousel } from 'antd';
import { LuCalendar } from "react-icons/lu";


const NewsList = (props: NewsListProps) => {

    const { data } = props;

    return ( 
        <div className={styles.wrapper}>
            <Carousel className={styles.carousel} {...CarouselSettings}>
                {
                    data.map((news, index) => (
                        <div key={index} className={styles.newsCard}>
                            <div className={styles.imageCard} style={{backgroundImage: `url(${news.imageUrl})`}}>
                                <div className={styles.modal}>
                                    <button>Read more</button>
                                </div>
                            </div>
                            <div className={styles.contentCard}>
                                <p>
                                    {news.content}
                                </p>
                                <div className={styles.date}>
                                    <LuCalendar />
                                    {news.date}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}
 
export default NewsList;