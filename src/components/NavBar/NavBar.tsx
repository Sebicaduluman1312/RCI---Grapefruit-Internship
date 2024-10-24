import styles from './NavBar.module.scss'
import logo from './assets/LOGO.jpg'

// Helpers
import { useSession, signOut } from 'next-auth/react';
import { NavBarProps } from './interface';
import { useState } from 'react';

// Components
import Link from 'next/link';
import { CgProfile } from "react-icons/cg";

import { UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps} from 'antd';

import { MenuSvg } from '../../../public/icons/MenuSvg';
import { SearchSvg } from '../../../public/icons/SearchSvg';
import { CloseSvg } from '../../../public/icons/CloseSvg';
import CustomModal from '../CustomModal';


const NavBar = (props: NavBarProps) => {

    const {state, callbackMenu, callbackSearch, callbackCloseSearch} = props; 

    const [openInput, setOpenInput] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const {data: session} = useSession();

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <span onClick={() => setOpenModal(true)}>View profile</span>
            ),
            icon: <UserOutlined />
        },
        {
          key: '4',
          danger: true,
          label: <span onClick={() => signOut({callbackUrl: '/'})}>Log out</span>,
          icon: <PoweroffOutlined />
        },
    ];

    const handleClickMenu = () => {
        if(document.documentElement.style.overflowY == 'hidden'){
            document.body.style.height = 'auto';
            document.documentElement.style.overflowY = 'auto';
            document.body.style.overflowY = 'auto';


        } else {
            document.body.style.height = '100vh';
            document.documentElement.style.overflowY = 'hidden';
            document.body.style.overflowY = 'hidden';
        }
        
        callbackMenu();
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        callbackSearch(e.target.value);
    }

    const handleOpenInput = () => {
        setOpenInput(true);
    }

    const handleCloseInput = () => {
        setOpenInput(false);
        callbackCloseSearch();
    }

    return ( 
        <div className={styles['navbar-content']}>
            <CustomModal open={openModal} setOpen={setOpenModal}/>
            <div className={styles.navbar}>
                {
                    !openInput ? 
                    <div className={styles.logo}>
                        <a href="/">
                            <img src={logo.src} alt="logo" className='logo'/>
                        </a>
                    </div> : 
                    <input autoFocus type="text" placeholder="Search" onChange={handleChangeInput}/>
                }
                <div className={styles['navbar-actions']}>
                    {
                        session?.user 
                            ? <Dropdown menu={{ items }}>

                                <a onClick={(e) => e.preventDefault()}>
                                    <CgProfile />
                                </a>

                              </Dropdown> 
                            : <Link href='/auth/login'>

                                <CgProfile />
                            
                              </Link>
                    }
                    
                    {
                        !state? 
                        (   
                            !openInput?
                            <SearchSvg callback={handleOpenInput}/> :
                            <CloseSvg callback={handleCloseInput}/> 
                        ) : <></>
                    }

                    {
                        !openInput ? state === false ? 
                        <MenuSvg callback={handleClickMenu} />: 
                        <CloseSvg callback={handleClickMenu}/> : <></>
                    }

                </div>
            </div>
        </div>
    );
}

export default NavBar
;