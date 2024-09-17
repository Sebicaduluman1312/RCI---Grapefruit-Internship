import classnames from "classnames";

import Link from "next/link";

import { ButtonProps } from "./interface";

import styles from './BaseButon.module.scss';

const BaseButton = (props: ButtonProps) => {
    const { style = 'regular', IconComponent, content, link, callback} = props;

    return ( 
        <>
            {
                link ? 
                    <Link href={link} className={classnames(styles.buttonContent, style === 'solid' && styles.solid)}>
                        <div className={styles.content}>
                            {content}
                        </div>
                        {IconComponent && <IconComponent />}
                    </Link> :
                    <div 
                        className={classnames(styles.buttonContent, style === 'solid' && styles.solid)}
                        onClick={callback}>

                            <div className={styles.content}>
                                {content}
                            </div>
                            {IconComponent && <IconComponent />}
                    </div>
            }
        </>
    );
}
 
export default BaseButton;