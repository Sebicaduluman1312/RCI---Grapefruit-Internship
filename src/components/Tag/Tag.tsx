import styles from './Tag.module.scss'

import clsx from "clsx";
import classnames from "classnames";

import { TagProps } from "./interface";


const Tag = (props: TagProps) => {

    const { label, size = 'normal', color = 'normal' } = props;
    

    return (
        <div className={classnames(styles.tag, size === 'small' && styles.small, (color === 'white' && size === 'normal') && styles.tagWhite)}>
            {label}
        </div>
    );
}
 
export default Tag;