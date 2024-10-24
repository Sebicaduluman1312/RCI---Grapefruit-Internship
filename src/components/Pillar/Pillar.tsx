import styles from './Pillar.module.scss';

/// Helpers
import { PillarProps } from './interface';

/// Components
import Link from 'next/link';


const Pillar = (props: PillarProps) => {

    const { title, icon, list, link} = props;

    return ( 
        <div className={styles.wrapper}>

            <div>
                <div className={styles.heading}>
                    <div className={styles.icon}>
                        {icon}
                    </div>

                    <h3 dangerouslySetInnerHTML={{__html: title}} />
                </div>

                <ul>
                    {
                        list.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{__html: item}} />
                        ))
                    }
                </ul>
            </div>

            <div className={styles.link}>
                <Link href={link}>
                    Find out more
                </Link>
            </div>

        </div>
    );
}
 
export default Pillar;