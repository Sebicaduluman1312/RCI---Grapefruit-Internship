import styles from './CompaniesNetwork.module.scss';

/// Helpers
import { CompaniesNetworkProps } from './interface';
import { carouselSettings } from './data';

/// Components
import { Carousel } from 'antd';


const CompaniesNetwork = (props: CompaniesNetworkProps) => {

    const { heading, companies, services} = props;

    return ( 
        <div className={styles.wrapper}>

            <div className={styles.heading}>
                <div className={styles.icon}>
                    {heading.icon}
                </div>
                <h3>{heading.title}</h3>
            </div>

            <Carousel {...carouselSettings} className={styles.carousel}>
                {
                    companies.map((company, index) => (
    
                        <div key={index} className={styles.content}>

                            <img src={company} alt="company logo" />

                            <span>Services:</span>
                            <ul>
                                {
                                    services[index].map((service, index) => (

                                        <li key={index}>{service}</li>

                                    ))
                                }
                            </ul>

                        </div>
                    ))
                }

            </Carousel>

        </div>
    );
}
 
export default CompaniesNetwork;