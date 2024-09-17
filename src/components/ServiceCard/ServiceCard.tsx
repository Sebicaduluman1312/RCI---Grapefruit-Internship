import styles from './ServiceCard.module.scss'

import Link from 'next/link';
import classNames from 'classnames';
import { IoArrowForwardCircleOutline } from "react-icons/io5";


import { ServiceCardProps } from './interface';


const ServiceCard = (props: ServiceCardProps) => {

    const { icon: IconComponent, title, link} = props.data;

    return ( 
        <div className={classNames(styles.wrapper, styles.wrapperBackground)}>
            <div className={styles.header}>
                <div className={styles.icon}>
                    <div className={styles.iconBackground}></div>
                    <IconComponent />
                </div>

                <h4>{title}</h4>
            </div>

            <Link href="/contact">
                <span>Read more</span>
                <IoArrowForwardCircleOutline />
            </Link>
        </div>

    );
}
 
export default ServiceCard;