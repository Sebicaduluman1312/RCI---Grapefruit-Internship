import styles from './CustomContent.module.scss';

/// Helpers
import classNames from 'classnames';
import { CustomContentProps } from './interface';

/// Components


const CustomContent = (props: CustomContentProps) => {

    const { content, maxWidth = false } = props;

    return ( 
        <div className={classNames(styles.wrapper, maxWidth && styles.fullWrapper)}>
            {
                content.map((text, index) => {
                    const Tag = text.tag;  
                    return <Tag key={index}>{text.content}</Tag>;
                })
            }
        </div>
    );
}
 
export default CustomContent;