import styles from './NewsPage.module.scss';

/// Helpers
import { title, news, NewsContent } from './data';
import { useState, useRef, useEffect } from 'react';
import type { PaginationProps } from 'antd';


/// Components
import Tag from '@/components/Tag';
import { LuCalendar } from "react-icons/lu";
import { Pagination, ConfigProvider,  } from 'antd';


const PAGINATION_COMPONENT = ({ onChange, pageNumber}: { onChange: PaginationProps['onChange'], pageNumber: number}) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#fff',
                    borderRadius: 100,

                    colorBgContainerDisabled: '#FF6B00',

                },
                components: {
                    Pagination: {
                        itemActiveBg: '#FF6B00',
                        itemBg: '#F5F5F5',
                        itemLinkBg: '#ff6b00'
                    },
                },
            }}
        >
        
        <Pagination align="center" defaultCurrent={1}  pageSize={3} total={pageNumber}  onChange={onChange} className={styles.pagination}/>

        </ConfigProvider>
    );
}

const SliceList = (news: NewsContent[]) => {
    let slicedNews = [];

    for(let i=0; i < news.length; i+=3){
        let section = news.slice(i, i+3);
        slicedNews.push(section);
    }

    return slicedNews;
}

const NewsPage = () => {

    const [actualPage, setActualPage] = useState(1);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const items = news.length;

    const newsPagination = SliceList(news);
    const ref = useRef<HTMLInputElement>(null);

    const handleSwitchPage: PaginationProps['onChange'] = (pageNumber) => {        
        setActualPage(pageNumber);
    }

    useEffect(() => {
        if (!isFirstLoad) {
            ref.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else {
            setIsFirstLoad(false);
        }
    }, [actualPage]);

    return ( 
        <div className={styles.wrapper}>
            <div className="container">

                <Tag label='news' />
                <h2 ref={ref}>
                    {title}
                </h2>
                
                {
                    newsPagination[actualPage-1].map((item, index) => (

                        <div key={index} className={styles.item}>

                            <div className={styles.image} style={{backgroundImage: `url(${item.image})`}}>
                                <div className={styles.modal}>
                                    <button>Read more</button>
                                </div>
                            </div>

                            <div className={styles.content}>
                                <div className={styles.date}>
                                    <LuCalendar />
                                    {item.data}
                                </div>

                                <h3>
                                    {item.title}
                                </h3>

                                <p>
                                    {item.content}
                                </p>

                            </div>
                        </div>
                    ))
                }
                
                <PAGINATION_COMPONENT onChange={handleSwitchPage} pageNumber={items}/>
                    
            </div>
        </div>
    );
}
 
export default NewsPage;