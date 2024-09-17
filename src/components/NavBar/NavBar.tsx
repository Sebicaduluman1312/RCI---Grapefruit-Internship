import styles from './NavBar.module.scss'
import logo from './assets/LOGO.jpg'

// Helpers
import { NavBarProps } from './interface';
import { MenuSvg } from '../../../public/icons/MenuSvg';
import { SearchSvg } from '../../../public/icons/SearchSvg';
import { CloseSvg } from '../../../public/icons/CloseSvg';

// Components



const NavBar = (props: NavBarProps) => {

    const {state, callback} = props;  
    

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
        
        callback();
    }

    return ( 
        <div className={styles['navbar-content']}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={logo.src} alt="logo" className='logo'/>
                </div>
                <div className={styles['navbar-actions']}>
                    <SearchSvg />
                    <input type="text" placeholder="Search"/>
                    {
                        state === false ?
                        <MenuSvg callback={handleClickMenu} />: 
                        <CloseSvg callback={handleClickMenu}/>
                    }
                </div>
            </div>
        </div>
    );
}

export default NavBar
;