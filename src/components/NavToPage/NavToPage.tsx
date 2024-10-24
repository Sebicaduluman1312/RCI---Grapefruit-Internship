import classNames from 'classnames';
import styles from './NavToPage.module.scss';

/// Helpers
import { NavToPageProps } from './interface';


/// Components
import Link from 'next/link';


const NavToPage = (props: NavToPageProps) => {

    const {img, title, link, btnText, whitebg} = props.data;

    return ( 
        <div className={classNames(styles.wrapper, whitebg && styles.whitebg)}>
            <div className={classNames(styles.containerFlex, whitebg && styles.graybg)}>
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