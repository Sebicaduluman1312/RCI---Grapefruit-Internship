"use client"
/// HELPERS
import { slideServices } from "@/components/Hero/data";
import { goDiscover } from "@/components/NavToPage/data";


/// COMPONENTS
import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/Hero";

/// SECTIONS
import Service from "@/page-sections/services/service/Service";
import NavToPage from "@/components/NavToPage";
import Projects from "@/page-sections/finance/projects/Projects";



export default function Contact() {
    return (
        <>
             <BaseLayout
                title='RCI Holding'
                description=''
                >

                <Hero data={slideServices}/>
                <Service />
                <Projects />
                <NavToPage data={goDiscover}/>
                
            </BaseLayout>

        </>
    )
}