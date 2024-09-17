import classNames from 'classnames';
import styles from './Newsletter.module.scss'

/// HELPERS
import { neswLetterHeading } from './data'; 
import { FormEvent, useState } from 'react';

/// COMPONENTS
import Heading from '@/components/Heading';
import { message, Alert } from 'antd';

const alerts = {
    emailAlreadyUsed: 'already',
    agreePolicy: 'agree',
    fillAllData: 'fill',
    success: 'success'
}


const Newsletter = () => {

    const [alert, setAlert] = useState('');
    const [fadeClass, setFadeClass] = useState('');

    const [formData, setFormData] = useState({
        fullName: 'Dan Popescu',
        company: 'Company',
        email: 'dan.popescu@company.com',
        agreePrivacy: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
    
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {fullName, company, email, agreePrivacy} = formData;

        if(!fullName || !company || !email)
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
            <div className={classNames('container', styles.containerFlex)}>
                <Heading data={neswLetterHeading}/>
                <form className={styles.formNewsletter} onSubmit={handleSubmitForm}>
                    <input type="text" name='fullName' id='fullName' placeholder='Full name' defaultValue={formData.fullName} onChange={handleChange}/>
                    <input type="text" name='company' id='company' placeholder='Company' defaultValue={formData.company} onChange={handleChange}/>
                    <input type="email" name='email' id='email' placeholder='Email' defaultValue={formData.email} onChange={handleChange}/>
                    <div className={styles.agreement}>
                        <input type="checkbox" name="agreePrivacy" id="agreePrivacy" className={styles.formCheckBox} onChange={handleChange} checked={formData.agreePrivacy}/>
                        <label htmlFor="agreePrivacy">I have read and agree to the Privacy Policy</label>
                    </div>
                    <button type="submit" id='submit'>Sign up now</button>
                    {alert && (
                        <div className={classNames(styles.alert, styles[fadeClass])}>
                            {alert === alerts.agreePolicy ? (
                                <Alert message="You must agree to the Privacy Policy." type="error" showIcon />
                            ) : alert === alerts.fillAllData ? (
                                <Alert message="Please fill out all fields." type="warning" showIcon />
                            ) : alert === alerts.emailAlreadyUsed ? (
                                <Alert message="Email already used" type="info" showIcon />
                            ) : alert === alerts.success ? (
                                <Alert message="Form submitted successfully!" type="success" showIcon />
                            ) : null}
                        </div>
                    )}
                </form>

            </div>
        </div>
    );
}
 
export default Newsletter;