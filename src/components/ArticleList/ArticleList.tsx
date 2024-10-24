import styles from './ArticleList.module.scss';

/// Helpers
import { useEffect, useState } from 'react';
import { urlArticles, ArticleType } from './data';
import { redirect } from 'next/navigation'

/// Components
import { LuCalendar } from "react-icons/lu";
import { ArticleListProps } from './interface';

const formatDate = (isoDate: string) => {

    const date = new Date(isoDate);

    const day = date.getUTCDate();
    const month = date.toLocaleString('en-US', { month: 'short' });
    const year = date.getUTCFullYear();

    const formattedDate = `${day} ${month} ${year}`;

    return formattedDate;
}



const ArticleList = (props: ArticleListProps) => {

    const { pageNumber } = props;
    const pageUrl = urlArticles + `&page=${pageNumber}`;

    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState<ArticleType[] | null>(null);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const storedPages = localStorage.getItem('articlePages');
        let pages: { [key: string]: ArticleType[] } = storedPages ? JSON.parse(storedPages) : {};

        if (pages[pageNumber]) {

            setArticles(pages[pageNumber]);
            /// console.log('Am luat din local storage');

        } else {

            const fetchArticles = async () => {
                setLoading(true);
                setError(null);

                try {
                    const response = await fetch(pageUrl);

                    if (!response.ok) {
                        throw new Error('Fetch articles failed');
                    }

                    const data = await response.json();
                    setArticles(data.articles);

                    pages[pageNumber] = data.articles;
                    localStorage.setItem('articlePages', JSON.stringify(pages));
                    /// console.log(`Am adaugat articolele pentru pagina ${pageNumber} in localStorage.`);

                } catch (e) {
                    if (e instanceof Error) {
                        setError(e.message);
                    } else {
                        throw e;
                    }
                } finally {
                    setLoading(false);
                }
            }

            fetchArticles();
        }

    }, [pageNumber]);
    

    const redirectToArticle = (url: string) => {
        window.location.href = url;
        redirect(url);
    }


    return ( 
        <div className={styles.wrapper}>
            {
                articles?.map((article, index) => (

                    <div key={index} className={styles.item}>

                        <div className={styles.image} style={{backgroundImage: `url(${article.urlToImage})`}}>
                            <div className={styles.modal}>
                                <button onClick={() => redirectToArticle(article.url)}>Read more</button>
                            </div>
                        </div>

                        <div className={styles.content}>

                            <div className={styles.date}>
                                <LuCalendar />
                                {formatDate(article.publishedAt)}
                            </div>

                            <h3>
                                {article.title}
                            </h3>

                            <p>
                                {article.content}
                            </p>

                        </div>
                    </div>
                ))
            }     
        </div>
    );
}
 
export default ArticleList;