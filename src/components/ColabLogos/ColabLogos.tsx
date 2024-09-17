import styles from './ColabLogos.module.scss';

///HELPERS
import { ColabLogoProps } from './interface';
import { carouselSettings } from '@/page-sections/home/Networks/data';


/// EXTERNAL COMPONENTS
import { Carousel } from 'antd';



const ColabLogos = (props: ColabLogoProps) => {

    const { logos } = props;

    return ( 
        <div className={styles.wrapper}>
            <Carousel className={styles.carousel} {...carouselSettings}>
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