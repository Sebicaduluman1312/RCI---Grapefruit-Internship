import styles from './ContentList.module.scss';

/// Helpers 
import { ContentListProps } from './interface';

/// Components

const ContentList = (props: ContentListProps) => {

    const {content, customIcon: CustomIcon} = props;

    return (
        <div className={styles.wrapper}>
            <ul>
                {
                    content.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
 
export default ContentList;