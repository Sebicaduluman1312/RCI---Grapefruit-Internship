import classNames from 'classnames';
import styles from './Logos.module.scss';

/// Helpers
import { clients } from './data';

/// Components
import Tag from '@/components/Tag';

const Logos = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">

                <Tag label='clients'/>

                <div className={styles.logos}>
                    {
                        clients.map((client, index) => (
                            <img key={index} src={client} alt="client logo" />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
 
export default Logos;