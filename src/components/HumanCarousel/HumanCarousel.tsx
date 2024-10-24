import styles from './HumanCarousel.module.scss'
/// Helpers
import { HumanProfileProps } from './interface';


/// Components
import { Carousel } from 'antd';

const HumanCarousel = (props: HumanProfileProps) => {

    const { team, subtitle, settings} = props;


    return ( 
        <div className={styles.wrapper}>

            {
                subtitle && 
                    <h4>{subtitle}</h4>
            }

            <Carousel {...settings} className={styles.carousel}>
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
 
export default HumanCarousel;