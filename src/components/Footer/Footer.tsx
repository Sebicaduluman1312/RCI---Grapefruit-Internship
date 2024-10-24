import Image from 'next/image';
import styles from './Footer.module.scss';

/// HELPERS
import {logo, topicList, pagesList} from './data';
import { RomaniaSvg } from '../../../public/icons/RomaniaSvg';


/// COMPONENTS
import Link from 'next/link';

/// EXTERNAL COMPONENTS
import { TbCircleArrowRight } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className='container'>
                <div className={styles.footerContent}>
                    <Image width={115} height={32} src={logo} alt='Logo Image'/>
                    <ul className={styles.topics}>
                        {
                            topicList.map((topic, index) => (
                                <li key={index}>
                                    <Link href={topic.link}>
                                        {topic.topic}
                                    </Link>
                                    <TbCircleArrowRight/>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className={styles.pages}>
                        {
                            pagesList.map((page, index) => (
                                <li key={index}><Link href={page.link}>{page.pageName}</Link></li>
                            ))
                        }
                    </ul>
                    <ul className={styles.links}>
                        <li>   
                            <Link href={''}>
                                Change language
                            </Link>
                            <RomaniaSvg />

                        </li>
                        <li>
                            <Link href={'https://ro.linkedin.com/company/romcapital-invest'}>
                                Follow us on LinkedIn
                            </Link>
                            <FaLinkedin />
                        </li>
                    </ul>
                </div>
                <div className={styles.credentials}>
                        <p>© 2024 RBI Holding</p>
                        <div className={styles.policy}>
                            <Link href={'/terms'}>Cookie Policy</Link>
                            <Link href={'/terms'}>Privacy Policy</Link>
                        </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;