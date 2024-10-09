import styles from './CustomModal.module.scss';

/// Helpers
import { useState, useEffect } from 'react';
import { ModalProps } from './interface';
import useAxiosAuth from '@/lib/hooks/useAxiosAuth';

/// Components
import { Avatar, Modal, Spin } from 'antd';

type UserInfo = {
    firstName: string,
    lastName: string,
    birthData: string,
    gender: string,
    phone: string,
    university: string,
    age: number,
    address: {
        address: string,
        city: string,
        country: string,
        state: string
    },
    email: string,
    image: string
}


const CustomModal = ({open, setOpen}: ModalProps) => {

    const [isModalOpen, setIsModalOpen] = useState(open);
    const [userData, setUserData] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true); // Starea pentru încărcare
    const axiosAuth = useAxiosAuth();

    useEffect(() => {
        setIsModalOpen(open);
        if (open) { 
            getUserInfo();
        }
    }, [open]);

    const getUserInfo = async () => {
        setLoading(true); 
        try {
            const res = await axiosAuth('/auth/me');
            setUserData(res.data);
        } catch (error) {
            console.error('Error fetching user info'); 
        } finally {
            setLoading(false); 
        }
    };

    const handleOk = () => {
        setOpen(false);
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
        setIsModalOpen(false);
    };

    return (  
        <div className={styles.wrapper}>
            <Modal 
                title={`Hello, ${userData?.firstName || 'User'}`} 
                open={isModalOpen} 
                onOk={handleOk} 
                onCancel={handleCancel}
            >
                {loading ? ( 

                    <Spin tip="Loading..." />

                ) : (

                    <div className={styles.header}>
                        <Avatar style={{ backgroundImage: `url(${userData?.image})`, backgroundSize: 'cover' }} size={100} />
                        <div className={styles.info}>
                            <p><b>Name:</b> {userData?.firstName} {userData?.lastName}</p>
                            <p><b>Email:</b> {userData?.email}</p>
                            <p><b>Address:</b> {userData?.address.country}, {userData?.address.city}, {userData?.address.state}</p>

                        </div>
                    </div>

                )}

            </Modal>
        </div>
    );
}
 
export default CustomModal;