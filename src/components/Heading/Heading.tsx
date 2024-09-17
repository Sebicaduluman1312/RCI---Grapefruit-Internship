
import Tag from '../Tag';
import styles from './Heading.module.scss';

import { Headingprops } from './interfaces';


const Heading = (props: Headingprops) => {

    if (!props.data) {
        return <div>Error: Data is not provided.</div>;
    }
    
    const {label, title, paragraph, subparagraph, tagColor} = props.data;

    return ( 
        <div className={styles.wrapper}>
            <Tag label={label} color={tagColor ? tagColor : undefined}/>
            {
                <>
                    {title && (
                        <h3
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                    )}
                    {paragraph &&  <p>{paragraph}</p>}
                    {subparagraph && <p className={styles.smallPragraph}>{subparagraph}</p>}
                </>
            }
        </div>
    );
}
 
export default Heading;