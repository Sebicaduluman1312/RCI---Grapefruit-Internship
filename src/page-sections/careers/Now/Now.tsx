import Link from 'next/link';
import styles from './Now.module.scss';

/// Helpers

/// Components
import Tag from '@/components/Tag';

const Now = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <Tag label='now' />
                <h3>
                    Always hiring! We're looking for engineers, economists, 
                    assistants, and project managers. Join us and make an impact! 
                    Apply now!
                </h3>

                <div className={styles.contact}>
                    <div>
                        <h4>Call us</h4>
                        <Link href={'tel:+40212029590'}>
                            +40 21 202 95 90
                        </Link>
                    </div>

                    <div className={styles.mail}>
                        <h4>Message us</h4>
                        <Link href={'mailto:office@romcapitalinvest.com'}>
                            office@romcapitalinvest.com
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    );
}
 
export default Now;