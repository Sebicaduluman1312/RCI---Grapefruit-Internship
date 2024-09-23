import '../../scss/main.scss';

import { useState } from 'react';

import Head from "next/head";

import Newsletter from '@/page-sections/home/Newsletter/Newsletter';
import Contact from '@/page-sections/home/Contact/Contact';
import News from "@/page-sections/home/News/News";
import Footer from '@/components/Footer';
import NavBar from "@/components/NavBar";
import Menu from '../Menu';
import Search from '../Search';

const BaseLayout = (props: BaseLayoutProps) => {

    const {showProjects = 'true', showContact = 'true', showNewsletter = 'true'} = props;

    const [openMenu, setOpenMenu] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    const [keySearch, setKeySearch] = useState('');


    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }

    /// If search input is not null, then we open the menu, otherwise no
    const handleOpenSearch = (value: string) => {
        if (value.length > 0) {
            setKeySearch(value);
            setOpenSearch(true);
        } else {
            setOpenSearch(false);
        }
    }

    const handleCloseSearch =  () => {
        setOpenSearch(false);
    }


    return ( 
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>

            <Search show={openSearch} searchKey={keySearch}/>
            <Menu show={openMenu} callback={handleOpenMenu}/>
            <NavBar state={openMenu} callbackMenu={handleOpenMenu} callbackSearch={handleOpenSearch} callbackCloseSearch={handleCloseSearch}/>

            {props.children}

            {showProjects ? <News /> : null }
            {showContact && <Contact />}
            {showNewsletter && <Newsletter />}

            <Footer />
        </div>
    );
}
 
export default BaseLayout;