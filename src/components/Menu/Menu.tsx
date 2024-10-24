import styles from './Menu.module.scss';

/// HELPERS 
import classNames from 'classnames';
import { primaryPageLinks, secondaryPageLinks, policies, services } from './data';
import { MenuProps } from './interface';

/// COMPONENTS
import { TbCircleArrowRight } from "react-icons/tb";
import Link from 'next/link';



const Menu = (props: MenuProps) => {

    const { show = false, callback } = props;

    const handleOutsideClick = () => {
        document.body.style.height = 'auto';
        document.documentElement.style.overflowY = 'auto';
        document.body.style.overflowY = 'auto';
        callback();
    }  

    return ( 
        <div className={classNames(styles.wrapper, show === true ? styles.active : styles.inactive)}>
            <div className={classNames('container', styles.containerFlex)}>
                <div className={styles.menuContent}>
                    <ul className={styles.primaryPages}>
                        {
                            primaryPageLinks.map((page, index) => (
                                <li key={index}>

                                    <Link href={''}>
                                        {page.title}
                                    </Link>

                                    <TbCircleArrowRight />

                                    {
                                        page.title === 'Services' && 
                                            <ul className={styles.services}>
                                                {services.map((service, index) => (
                                                    <li key={index}>{service}</li>
                                                ))}
                                            </ul>
                                    }

                                </li>
                            ))
                        }
                    </ul>
                    <ul className={styles.secondaryPages}>
                        {
                            secondaryPageLinks.map((page, index) => (
                                <li key={index}>

                                    <Link href={''}>
                                        {page.title}
                                    </Link>

                                    <TbCircleArrowRight />

                                    <p>{page.subtitle}</p>
                                </li>
                            ))
                        }
                        <li className={styles.policies}>
                            {
                                policies.map((pol, index) => (

                                    <Link key={index} href={''}>
                                        {pol.title}
                                    </Link>

                                ))
                            }
                        </li>
                    </ul>
                </div>
            </div>
            {
                show === true && 
                    <div onClick={handleOutsideClick} className={styles.outsideArea} />
            }
        </div>
    );
}
 
export default Menu;