import CheckedSvg from '../../../public/icons/CheckedSvg';
import styles from './CheckedTag.module.scss';

/// Helpers
import { CheckedTagProps } from './interface';

/// Components


const CheckedTag = (props: CheckedTagProps) => {

    const { tag } = props;

    return ( 
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <CheckedSvg />
                
                <span dangerouslySetInnerHTML={{ __html: tag }} />
            </div>
        </div>
    );
}
 
export default CheckedTag;