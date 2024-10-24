import styles from './CustomPagination.module.scss';

/// Helpers
import { useState, useEffect } from 'react';
import { CustomPaginationProps } from './interface';
import { PaginationProps } from 'antd';


/// Components
import { Pagination } from 'antd';
import ArticleList from '../ArticleList';


const CustomPagination = (props: CustomPaginationProps) => {

    const {pageSize, totalItems} = props;


    const [currentPage, setCurrentPage] = useState(1);

    const handleSwitchPage: PaginationProps['onChange'] = (pageNumber) => {  
        setCurrentPage(pageNumber);
    }

    useEffect(() => {
        document.getElementById('titleNews')?.scrollIntoView({ behavior: 'smooth' }); 
    }, [currentPage]); 


    return ( 
        <div className={styles.wrapper}>
            
            <ArticleList pageNumber={currentPage}/>

            <Pagination align="center" defaultCurrent={1} pageSize={pageSize} total={totalItems} onChange={handleSwitchPage} className={styles.pagination}/>

        </div>
    );
}
 
export default CustomPagination;