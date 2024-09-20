import styles from './Search.module.scss';

/// Helpers
import { SearchProps } from './interface';
import { results } from './data';
import classNames from 'classnames';
import { useEffect, useState } from 'react';


/// Components
import Tag from '../Tag';
import Link from 'next/link';
import { Spin, ConfigProvider } from 'antd';
import { TbCircleArrowRight } from "react-icons/tb";

const SPIN_ANIMATION = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FF6B00', 
                },
                components: {
                    Spin: {
                        dotSizeLG: 65, 
                    },
                },
            }}
        >
            <Spin size="large" tip="Loading..." className={styles.spin} />
        </ConfigProvider>
    );
};


const Search = (props: SearchProps) => {

    const { searchKey, show } = props;


    const [loadingResults, setLoadingResults] = useState(true);

    useEffect(() => {
        setLoadingResults(true);

        const timeout = setTimeout(() => {
            setLoadingResults(false);
            console.log('Results loaded');
        }, 3000);

        return () => clearTimeout(timeout);
    }, [searchKey]);


    const highlightMatchText = (text: string, key: string) => {
        if (!key) return text;

        const regex = new RegExp(`(${key})`, 'gi');

        return text.split(regex).map((part, index) => 
            regex.test(part) ? <span key={index} style={{ backgroundColor: '#FFF6CA' }}>{part}</span> : part
        );
    }
    

    return (
        <div className={classNames(styles.wrapper, show === true ? styles.active : styles.inactive)}>
            
            <div className="container">

                <h1> Searching for "{searchKey}" </h1>

                <Tag label='Results'/>    

                {
                    loadingResults === true 
                        ?   <div className={styles.spinContainer}>
                                <br />
                                <SPIN_ANIMATION />
                            </div> 
                        :   <>
                                <div className={styles.results}>
                                    {
                                        results.map((result, index) => (
                                            <div key={index} className={styles.result}>

                                                <TbCircleArrowRight />

                                                <Link href={result.link}>
                                                    {highlightMatchText(result.text, searchKey)}
                                                </Link>

                                            </div>
                                        ))
                                    }
                                </div>

                                <small>
                                    {results.length} results found
                                </small>
                            </>
                }

            </div>
        </div>   
    )
}
 
export default Search;