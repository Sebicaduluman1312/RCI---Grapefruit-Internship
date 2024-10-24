import Link from 'next/link';
import styles from './Team.module.scss';

// Helpers
import { teamContent, linkData, teamPeople, carouselSettings } from './data';

// Components
import Tag from '@/components/Tag';
import HumanCarousel from '@/components/HumanCarousel';

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

                <HumanCarousel team={teamPeople} settings={carouselSettings}/>  

                <button>
                    View all team
                </button>


            </div>
        </div>
    );
}
 
export default Team;