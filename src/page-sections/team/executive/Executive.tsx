import styles from './Executive.module.scss';

/// Helpers
import { heading, profiles, profile} from './data';
import { useEffect, useState } from 'react';

/// Components 
import Link from 'next/link';
import Heading from '@/components/Heading';
import ModalProfile from '@/components/ModalProfile';
import ProfileList from '@/components/ProfileList';


const Executive = () => {
    const [staffProfile, setStaffProfile] = useState(profile);
    const [openModal, setOpenModal] = useState(false);

    return ( 
        <div className={styles.wrapper}>

            {openModal &&  <ModalProfile setModal={setOpenModal} {...staffProfile}/>}

            <div className="container">
                <Heading data={heading}/>

                <Link href={'/'}>
                    View the team's organisational chart
                </Link> 

                {
                    profiles.map((profile, index) => (
                        <ProfileList setModal={setOpenModal} {...profile}/>
                    ))
                }

            </div>
        </div>
    );
}
 
export default Executive;