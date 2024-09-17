import '../../scss/main.scss';

import { useState } from 'react';

import Head from "next/head";

import Newsletter from '@/page-sections/home/Newsletter/Newsletter';
import Contact from '@/page-sections/home/Contact/Contact';
import News from "@/page-sections/home/News/News";
import Footer from '@/components/Footer';
import NavBar from "@/components/NavBar";
import Menu from '../Menu';

const BaseLayout = (props: BaseLayoutProps) => {

    const {showProjects = 'true', showContact = 'true', showNewsletter = 'true'} = props;

    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    }


    return ( 
        <div>
            <Head>
                <title>{props.title}</title>
            </Head>

            <Menu show={openMenu} callback={handleOpenMenu}/>
            <NavBar state={openMenu} callback={handleOpenMenu} />

            {props.children}

            {showProjects ? <News /> : null }
            {showContact && <Contact />}
            {showNewsletter && <Newsletter />}

            <Footer />
        </div>
    );
}
 
export default BaseLayout;