import styles from './ContactForm.module.scss';

/// Helpers
import { title, paragraph, reasonsContact } from './data';
import classNames from 'classnames';
import { TbCircleArrowRight } from "react-icons/tb";

/// Components
import Link from 'next/link';
import { ConfigProvider, Select } from 'antd';
import SelectIcon from '../../../../public/icons/SelectIcon';
import {Alert} from 'antd';
import { useState } from 'react';

const SELECT_MENU = ({ handleChangeReason }: { handleChangeReason: (value: string) => void }) => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Select: {
                        optionSelectedBg: '#ff6b00',
                        optionSelectedColor: '#fff',
                    },
                },
            }}
        >
            <Select 
                options={reasonsContact} 
                variant="borderless"
                placeholder="Reason for contacting"
                onChange={handleChangeReason}
                suffixIcon={<SelectIcon />}
                className={styles.select}
            />
        </ConfigProvider>
    );
}

const CONTENT = () => {
    return (
        <div className={styles.content}>
            <h1>{ title }</h1>
            <p>{paragraph}</p>

            <div className={styles.wrap}>
                <div>
                    <h3>Call us</h3>
                    <Link href={'tel:+40212029590'}>
                        +40 21 202 95 90
                    </Link>
                </div>

                <div>
                    <h3>Message us</h3>
                    <Link href={'mailto:office@romcapitalinvest.com'}>
                        <span className={styles.underline}>
                            office@romcapitalinvest.com
                        </span>
                    </Link>
                </div>

                <div>
                    <h3>Visit us</h3>
                    <small>
                        15 Dacia Boulevard, District 1,<br/>
                        010420, Bucharest, Romania
                    </small>
                </div>
            </div>

        </div>
    )
}

/// Alerts for handle form status
const alerts = {
    agreePolicy: 'agree',
    fillAllData: 'fill',
    success: 'success'
}


const ContactForm = () => {

    /// States for form status
    const [alert, setAlert] = useState('');
    const [fadeClass, setFadeClass] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        position: '',
        email: '',
        reason: '',
        message: '',
        agreePrivacy: false
    });

    /// Update use state attribute from ANTD SELECT COMPONENT
    const handleChangeReason = (value: string) => {
        setFormData(prevState => ({
            ...prevState,
            reason: value
        }));
    };

    /// Updare text area 
    const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(prevState => ({
            ...prevState,
            message: e.target.value
        }));
    };

    /// Update the rest of the inputs
    const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, type, checked} = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value 
        }))
    }

    /// Submit form
    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const {name, company, position, email, reason, message, agreePrivacy} = formData;

        if(!name || !company || !position || !email || !reason || !message)
            setAlert(alerts.fillAllData);
        else if (agreePrivacy === false)
            setAlert(alerts.agreePolicy);
        else 
            setAlert(alerts.success);

        setFadeClass('fade-in');

        setTimeout(() => {
            setFadeClass('fade-out');
            setTimeout(() => {
                setAlert('');
                setFadeClass('');
            }, 500);
        }, 2000);
    }


    return ( 
        <div className={styles.wrapper}>
            <div className={classNames("container", styles.containerFlex)}>
                
                <CONTENT />

                <div className={styles.form}>
                    <form onSubmit={handleSubmitForm}>
                        <input type="text" name='name' id='name' placeholder='Name' onChange={handleChangeInputs}/>
                        <input type="text" name='company' id='company' placeholder='Company' onChange={handleChangeInputs}/>
                        <input type="text" name='position' id='position' placeholder='Position' onChange={handleChangeInputs}/>
                        <input type="text" name='email' id='email' placeholder='Email' onChange={handleChangeInputs}/>

                        <SELECT_MENU handleChangeReason={handleChangeReason} />

                        <textarea name="message" id="message" placeholder='Write your message here please...' onChange={handleChangeTextArea}></textarea>
                        <div className={styles.agreement}>
                            <input type="checkbox" name="agreePrivacy" id="agreePrivacy" onChange={handleChangeInputs} />
                            <label htmlFor="agreePrivacy">By checking this box, you are agreeing to our terms of service.</label>
                        </div>

                        <button type="submit" id='submit'>
                            <span>
                                Submit
                            </span>
                            <TbCircleArrowRight />
                        </button>
                        {alert && (
                            <div className={classNames(styles.alert, styles[fadeClass])}>
                                {alert === alerts.agreePolicy ? (
                                    <Alert message="You must agree to the Privacy Policy." type="error" showIcon />
                                ) : alert === alerts.fillAllData ? (
                                    <Alert message="Please fill out all fields." type="warning" showIcon />
                                ) :  alert === alerts.success ? (
                                    <Alert message="Form submitted successfully!" type="success" showIcon />
                                ) : null}
                            </div>
                        )}

                    </form>
                </div>

            </div>
        </div>
    );
}
 
export default ContactForm;