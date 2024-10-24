import styles from './Group.module.scss';

/// Helpers
import { headingData, networks} from './data';


/// Components
import Heading from '@/components/Heading';
import CompaniesNetwork from '@/components/CompaniesNetwork';


const Group = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
  
                <Heading data={headingData}/>

                {
                    networks.map((network, index) => (
                        <CompaniesNetwork key={index} {...network}/>
                    ))
                }

            </div>
        </div>
    );
}
 
export default Group;