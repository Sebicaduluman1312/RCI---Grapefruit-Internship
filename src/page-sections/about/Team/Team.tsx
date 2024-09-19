import Link from 'next/link';
import styles from './Team.module.scss';

// Helpers
import { teamContent, linkData, teamPeople } from './data';

// Components
import Tag from '@/components/Tag';
import HumanProfile from '@/components/HumanProfile';


const Team = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Tag label='executive team'/>

                <p>
                    {teamContent}
                    <Link href={''}>
                        {linkData}
                    </Link>
                </p>

                <HumanProfile team={teamPeople} />  

                <button>
                    View all team
                </button>


            </div>
        </div>
    );
}
 
export default Team;