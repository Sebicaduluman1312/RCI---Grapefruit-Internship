import styles from "./Welcome.module.scss"

/// HELPERS
import { statistics } from "@/components/Statistics/data";
import { welcomeHeading, btnData } from "./data";

/// COMPONENTS
import Heading from "@/components/Heading";
import Statistics from "@/components/Statistics/Statistics";
import BaseButton from "@/components/BaseButton";

/// EXTERN COMPONENTS
import { IoArrowForwardCircleOutline } from "react-icons/io5";



const Welcome = () => {

    return ( 
        <section className={styles.wrapper}>
            <div className="container">
                <Heading data={welcomeHeading}/>
                <Statistics data={statistics}/>
                <BaseButton {...btnData}/>
            </div>
        </section>
    );
}
 
export default Welcome;