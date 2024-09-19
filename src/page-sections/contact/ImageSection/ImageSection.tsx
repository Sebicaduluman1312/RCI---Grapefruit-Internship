import styles from './ImageSection.module.scss';

/// Helpers
import classNames from 'classnames';
import {contactImages} from './data'; 

/// Components

const ImageSection = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className={classNames("container", styles.containerInline)}>
                {
                    contactImages.map((image, index) => (
                        <img src={image} alt="Contact Image" />
                    ))
                }
            </div>
        </div>
    );
}
 
export default ImageSection;