import Tag from '@/components/Tag';
import styles from './Solutions.module.scss';

/// Helpers
import { solutions } from '../services/data';

/// Components
import CheckedTag from '@/components/CheckedTag';


const Solutions = () => {
    return (
        <div className={styles.wrapper}>
            <div className="container">
                <Tag label='solutions'/>

                <div className={styles.solutionsGrid}>

                    {
                       solutions.map((solution, index) => (
                            <CheckedTag key={index} tag={solution}/>
                       ))
                    }

                </div>

            </div>
        </div>
    );
}
 
export default Solutions;