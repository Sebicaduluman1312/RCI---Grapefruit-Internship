import styles from './Contact.module.scss';

/// COMPONENTS
import Heading from '@/components/Heading';
import Link from 'next/link';

/// HELPERS
import { contactData, contactHeadingData } from './data';
import classNames from 'classnames';

const Contact = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Heading data={contactHeadingData}/>
                {
                    <div className={styles.infos}>
                        <div  className={styles.content}>
                            <h4>
                                Visit Us
                            </h4>    
                            <a>
                                15 Dacia Boulevard, Sector 1,<br/>
                                Bucharest, 010402, Romania
                            </a>
                        </div>

                        <div  className={styles.content}>
                            <h4>
                                Call us
                            </h4>    
                            <a href="tel:+40212029590">
                                +40 21 202 95 90
                            </a>
                        </div>

                        <div  className={styles.content}>
                            <h4>
                                Message us
                            </h4>    
                            <a href="mailto:office@romcapitalinvest.com">
                                office@romcapitalinvest.com
                            </a>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default Contact;