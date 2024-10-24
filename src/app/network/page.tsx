"use client"
/// HELPERS
import { slideNetwork } from "@/components/Hero/data";
import { goDiscover } from "@/components/NavToPage/data";

/// COMPONENTS
import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/Hero";

/// SECTIONS
import Group from "@/page-sections/network/group/Group";
import Services from "@/page-sections/home/Services/Services";
import NavToPage from "@/components/NavToPage";


export default function Contact() {
    return (
        <>
             <BaseLayout
                title='RCI Holding'
                description=''
                >

                <Hero data={slideNetwork}/>
                <Group />
                <Services />
                <NavToPage data={goDiscover}/>

            </BaseLayout>

        </>
    )
}