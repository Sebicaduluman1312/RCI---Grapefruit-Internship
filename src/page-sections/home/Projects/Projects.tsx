import styles from './Projects.module.scss';

import { projectsData, projects, btnData } from './data'

import ProjectsList from '@/components/ProjectsList';
import BaseButton from '@/components/BaseButton';
import Heading from '@/components/Heading';


const Projects = () => {

    return ( 
        <div className={styles.wrapper}>
            <div className="container">
                <Heading data={projectsData}/>

                <ProjectsList data={projects}/>
                
                <BaseButton {...btnData} />
            </div>
        </div>
    );
}
 
export default Projects;