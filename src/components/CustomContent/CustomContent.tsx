import styles from './CustomContent.module.scss';

/// Helpers
import classNames from 'classnames';
import { CustomContentProps } from './interface';
import sanitizeHtml from 'sanitize-html';

/// Components


const CustomContent = (props: CustomContentProps) => {

    const { content, maxWidth = false } = props;
    
    const clean = sanitizeHtml(String(content), {
        allowedTags: ['p', 'a', 'b', 'h2', 'small'],
        allowedAttributes: {
            'a' : ['href']
        },
        disallowedTagsMode: 'completelyDiscard',

    });

    return ( 
        <div 
            className={classNames(styles.wrapper, maxWidth && styles.fullWrapper)}
            dangerouslySetInnerHTML={{ __html: clean }} />
    );
}
 
export default CustomContent;