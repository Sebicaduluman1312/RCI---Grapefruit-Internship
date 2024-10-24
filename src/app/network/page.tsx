"use client"
/// HELPERS
import { slideNetwork } from "@/components/Hero/data";

/// COMPONENTS
import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/Hero";

/// SECTIONS
import Group from "@/page-sections/network/group/Group";
import Services from "@/page-sections/home/Services/Services";


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

            </BaseLayout>

        </>
    )
}