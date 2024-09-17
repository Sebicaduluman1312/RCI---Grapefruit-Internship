import styles from './Qualities.module.scss';

/// Helpers
import { QualitiesProps } from './interface';


/// Components
import Tag from '../Tag';


const Qualities = (props: QualitiesProps) => {

    const { label, content} = props.data;

    return ( 
        <div className={styles.wrapper}>
            <Tag label={label} />
            <p>{content}</p>
        </div>
    );
}
 
export default Qualities;