import { Carousel } from 'antd';
import styles from './IsoList.module.scss';

/// Helpers
import { isos, carouselSettings } from './data';

/// Components

const IsoList = () => {
    return ( 
       <div className={styles.wrapper}>
            <Carousel className={styles.carousel} {...carouselSettings}>
                {
                    isos.map((iso, index) => (
                        <img key={index} src={iso} alt="iso" className='iso'/>
                    ))
                }
            </Carousel>
       </div>
    );
}
 
export default IsoList;