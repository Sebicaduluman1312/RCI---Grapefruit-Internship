import styles from './HumanProfile.module.scss';

/// Helpers
import { HumanProfileProps } from './interface';
import { carouselSettings } from './data';


/// Components
import { Carousel } from 'antd';

const HumanProfile = (props: HumanProfileProps) => {

    const { team, role } = props;

    return ( 
        <div className={styles.wrapper}>

            <Carousel {...carouselSettings} className={styles.carousel}>
                {
                    team.map((human, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.photo}>
                                <img src={human.photo} alt="" />
                            </div>

                            <p>
                                {human.name}
                            </p>

                            <small>
                                {human.position}
                            </small>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    );
}
 
export default HumanProfile;