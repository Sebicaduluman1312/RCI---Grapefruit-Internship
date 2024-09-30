import CustomContent from '@/components/CustomContent';
import styles from './Executive.module.scss';

/// Helpers
import { heading, executiveOffice, internationalBusiness, consulting, financial, technology, energyMarkets, managementConsulting, settingsFull} from './data';

/// Components 
import Link from 'next/link';
import Heading from '@/components/Heading';
import HumanProfile from '@/components/HumanProfile';


const Executive = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Heading data={heading}/>

                <Link href={'/'}>
                    View the team's organisational chart
                </Link> 

                <h2>RCI Holding Executive Office</h2>
                <HumanProfile {...executiveOffice} />

                <h2>International Bussiness Support</h2>
                <HumanProfile {...internationalBusiness} />

                <h2>RCI Holding Pilliers Management</h2>
                <HumanProfile {...consulting} />

                <HumanProfile {...financial} />

                <div className={styles.technology}>
                    <HumanProfile {...technology} />
                </div>

                <HumanProfile {...energyMarkets} />

                <HumanProfile {...managementConsulting} />
            </div>
        </div>
    );
}
 
export default Executive;