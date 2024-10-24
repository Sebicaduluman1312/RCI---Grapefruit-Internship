import Tag from '@/components/Tag';
import styles from './Term.module.scss';

/// Helpers
import { sections, sectionInformation } from './data';
import { useState } from 'react';
import SectionSvg from '../../../public/icons/SectionSvg';

/// Components
import { TbArrowsRightDown } from "react-icons/tb";


const Term = () => {

    const [information, setInformation] = useState('Intellectual property');

    const handleChangeSection = (info: string) => {
        setInformation(info);
    }

    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Tag label='terms'/>

                <div className={styles.content}>

                    <div className={styles.sections}>
                        {
                            sections.map((section, index) => (
                                <div 
                                    key={index} className={styles.section}
                                    onClick={() => handleChangeSection(section)}>
                                    
                                    <p>
                                        {section}
                                    </p>

                                    <TbArrowsRightDown />
                                </div>
                            ))
                        }
                    </div>

                    <div className={styles.information}>
                        {
                            sectionInformation[information].map((info, index) => (
                                <p key={index}>{info}</p>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Term;