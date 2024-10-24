import classNames from 'classnames';
import FilePdfSvg from '../../../public/icons/FilePdfSvg';
import styles from './Brochure.module.scss'

/// Helpers
import { BrochureProps } from './interface';

/// Components


const Brochure = (props: BrochureProps) => {

    const { downloadLink } = props; 

    return (
        <div className={styles.wrapper}>
            <FilePdfSvg />
            <a href={downloadLink} download>
                Download our Company brochure for more info
            </a>
        </div>
    );
}
 
export default Brochure;