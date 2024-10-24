import styles from './ColabLogos.module.scss';

///HELPERS
import { ColabLogoProps } from './interface';

/// EXTERNAL COMPONENTS
import { Carousel } from 'antd';



const ColabLogos = (props: ColabLogoProps) => {

    const { logos, settings } = props;

    return ( 
        <div className={styles.wrapper}>
            <Carousel className={styles.carousel} {...settings}>
                {
                    logos.map((imageUrl, index) => (
                        <img key={index} src={imageUrl} className='logoImg' alt="Colab Logo" />
                    ))
                }
            </Carousel>
        </div>
    );
}
 
export default ColabLogos;