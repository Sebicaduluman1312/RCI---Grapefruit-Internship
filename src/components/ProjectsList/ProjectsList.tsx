import classNames from 'classnames';
import styles from './ProjectsList.module.scss'

import { ProjectsListProps } from './interface';


import Link from 'next/link';
import { TbCircleArrowRight } from "react-icons/tb";



const ProjectsList = (props: ProjectsListProps) => {

    const {data} = props; 

    return ( 
        <div className={styles.wrapper}>
            {
                data.map((project, index) => (
                    <div key={index} 
                        className={classNames(styles.projectCard, styles.gradient)} 
                        style={{backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url(${project.image})`}}>
                        
                        <h4>{project.title}</h4>
                        
                        <div className={styles.blurredCard}>
                            <p>{project.cardParagraph}</p>
                            <Link href='/contact'>
                                <TbCircleArrowRight />
                            </Link>
                        </div>

                    </div>
                ))
            }
        </div>
    );
}
 
export default ProjectsList;