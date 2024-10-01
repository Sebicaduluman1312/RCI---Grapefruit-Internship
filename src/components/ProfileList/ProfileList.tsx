import styles from './ProfileList.module.scss';

/// Helpers
import { ProfileListProps } from './interface';

/// Components


const ProfileList = (props: ProfileListProps) => {

    const {title, subtitle, members, setModal} = props;

    const handleOpenModal = () => {
        document.body.style.height = 'auto';
        document.documentElement.style.overflowY = 'hidden';
        document.body.style.overflowY = 'hidden';

        setModal(true);
        /// To Do update profile on open modal
    }

    return ( 
        <div className={styles.wrapper}>

            { title && <h4>{title}</h4> }

            { subtitle && <h5>{subtitle}</h5> }


            <div className={styles.team}>

                {members.map((member, index) => (

                    <div key={index} className={styles.card} onClick={handleOpenModal}>

                        <div className={styles.image}>
                            <img src={member.photo} alt="" />
                        </div>

                        <p>{member.name}</p>

                        <span>{member.position}</span>
                    </div>

                ))}

            </div>

        </div>
    );
}
 
export default ProfileList;