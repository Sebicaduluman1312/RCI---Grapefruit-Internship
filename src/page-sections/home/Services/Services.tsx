'use client';
import styles from './Services.module.scss';

import { cards } from '@/components/ServiceCard/data';
import { serviceHeading, carouselSettings } from './data';

import Heading from '@/components/Heading';
import ServiceCard from '@/components/ServiceCard';

import { Carousel } from 'antd';

/// trebuie sa bag setarile la responsive
const Services = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Heading data={serviceHeading}/>
                <Carousel className={styles.carousel} {...carouselSettings} >
                    {
                        cards.map((cardContent, index) => (
                            <ServiceCard key={index} data={cardContent} />
                        ))
                    }
                </Carousel>
            </div>
        </div>
    );
}
 
export default Services;