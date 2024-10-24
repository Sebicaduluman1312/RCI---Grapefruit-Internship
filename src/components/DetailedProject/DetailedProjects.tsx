import styles from './DetailedProjects.module.scss';

/// Helpers
import { DetailedProjectsProps } from './interface';

/// Components


const DetailedProjects = (props: DetailedProjectsProps) => {

    const {image, title, sector, subtitle, content} = props;

    return ( 
        <div className={styles.wrapper}>
            
            <div className={styles.projectImage} style={{backgroundImage: `url(${image})`}} />

            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{sector}</p>
                <h4>{subtitle}</h4>
                <small dangerouslySetInnerHTML={{__html: content}}/>
            </div>

        </div>
    );
}
 
export default DetailedProjects;