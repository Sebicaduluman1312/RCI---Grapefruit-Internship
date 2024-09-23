import styles from './NavBar.module.scss'
import logo from './assets/LOGO.jpg'

// Helpers
import { NavBarProps } from './interface';
import { MenuSvg } from '../../../public/icons/MenuSvg';
import { SearchSvg } from '../../../public/icons/SearchSvg';
import { CloseSvg } from '../../../public/icons/CloseSvg';
import { useState } from 'react';

// Components



const NavBar = (props: NavBarProps) => {

    const {state, callbackMenu, callbackSearch, callbackCloseSearch} = props;  

    const [openInput, setOpenInput] = useState(false);
    

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
            <div className={styles.navbar}>
                {
                    !openInput ? 
                    <div className={styles.logo}>
                        <img src={logo.src} alt="logo" className='logo'/>
                    </div> : 
                    <input type="text" placeholder="Search" onChange={handleChangeInput}/>
                }
                <div className={styles['navbar-actions']}>
                    
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