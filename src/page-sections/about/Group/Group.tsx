import styles from './Group.module.scss';

/// Helpers
import { contentGroup } from './data';
import europe from '../assets/europe.png';

/// Components
import CustomContent from '@/components/CustomContent';


import Tag from '@/components/Tag';
import classNames from 'classnames';

const Group = () => {
    return (
        <div className={styles.wrapper}>
            <div className={classNames("container", styles.containerFlex)}>
                <div className={styles.leftContent}>
                    <Tag label='group'/>
                    <CustomContent content={contentGroup} maxWidth={true}/>
                </div>

                <div className={styles.rightContent}/>
            </div>
        </div>
    );
}
 
export default Group;