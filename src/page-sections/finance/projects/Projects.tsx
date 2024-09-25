import DetailedProjects from '@/components/DetailedProject';
import styles from './Projects.module.scss';

/// Helpers
import {projects} from './data';

/// Components
import Tag from '@/components/Tag';

const Projects = () => {
    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Tag label='projects'/>

                {
                    projects.map((project, index) => (
                        <DetailedProjects {...project}/>
                    ))
                }

            </div>
        </div>
    );
}
 
export default Projects;