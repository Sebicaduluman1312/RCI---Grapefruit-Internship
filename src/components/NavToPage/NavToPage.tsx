import styles from './NavToPage.module.scss';

/// Helpers
import { NavToPageProps } from './interface';


/// Components
import Link from 'next/link';


const NavToPage = (props: NavToPageProps) => {

    const {img, title, link, btnText} = props.data;

    return ( 
        <div className={styles.wrapper}>
            <div className={styles.containerFlex}>
                <div 
                    className={styles.image} 
                    style={{ backgroundImage: `url(${img})` }}/>

                <div className={styles.content}>
                    <h4>{title}</h4>

                    <Link href={link}>
                        {btnText}
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default NavToPage;