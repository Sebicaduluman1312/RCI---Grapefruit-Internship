import styles from './Qualities.module.scss';

/// Helpers
import { QualitiesProps } from './interface';


/// Components
import Tag from '../Tag';


const Qualities = (props: QualitiesProps) => {

    const { label, content, list} = props.data;

    return ( 
        <div className={styles.wrapper}>
            <Tag label={label} />
            {
                content && <p>{content}</p>
            }
            {
                list && 
                    <ul>
                        {list.map((item, index) => (
                            <li key={index}> {item} </li>
                        ))}
                    </ul>
            }
        </div>
    );
}
 
export default Qualities;