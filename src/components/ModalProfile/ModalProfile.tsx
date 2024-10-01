import styles from './ModalProfile.module.scss';

/// Helpers
import { ModalProfileProps } from './interface';

/// Components
import CloseModalSvg from '../../../public/icons/CloseModalSvg';

const ModalProfile = (props: ModalProfileProps) => {

    const {image, name, position, description, setModal} = props;

    const handleCloseModal = () => {
        document.body.style.height = 'auto';
        document.documentElement.style.overflowY = 'auto';
        document.body.style.overflowY = 'auto';

        setModal(false);
    }

    return ( 
        <div id='profileModal' className={styles.wrapper}>

            <div className={styles.blur} onClick={handleCloseModal}/>

            <div className={styles.content}>

                <CloseModalSvg callback={handleCloseModal}/>
                <div className={styles.heading}>
                    <img src={image} alt="" />

                    <div className={styles.info}>
                        <h4>{name}</h4>
                        <h5>{position}</h5>
                    </div>
                </div>

                <p dangerouslySetInnerHTML={{__html: description}}/>

            </div>

        </div>
    );
}
 
export default ModalProfile;