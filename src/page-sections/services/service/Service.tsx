import styles from './Service.module.scss';

/// Helpers
import { headingData, pillars } from './data';

/// Components
import Heading from '@/components/Heading';
import Pillar from '@/components/Pillar';

const Service = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Heading data={headingData}/>

                <p>RCI Holding provides a wide array of services structured in five pillars:</p>

                <div className={styles.content}>
                    {
                        pillars.map((pillar, index) => (
                            <Pillar key={index} {...pillar}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Service;