import styles from './Statistics.module.scss';

import { StatisticsProps } from "./interface";
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

import CountUp from 'react-countup';


const Statistics = (props: StatisticsProps) => {

    const { data } = props;

    const [hasStarted, setHasStarted] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1,     
    });

    useEffect(() => {
        if (inView) {
            setHasStarted(true);
        }
    }, [inView]);

    return ( 
        <div ref={ref} className={styles.wrapper}>
            {
                data.map((statistic, index) => (
                    <div key={index} className={styles.statisticContent}>
                        <h4>{statistic.title}</h4>
                        <p>
                            {
                                statistic.leftString &&
                                    <span>{statistic.leftString}</span>
                            }
                            {
                                hasStarted && <CountUp duration={5} end={statistic.number} />
                            }
                            {
                                statistic.rightString &&
                                    <span>{statistic.rightString}</span>
                            }
                        </p>
                        {
                            statistic.implemented && 
                                <span>implemented projects</span>
                        }
                    </div>
                ))
            }
        </div>
    );
}
 
export default Statistics;