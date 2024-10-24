"use client"
/// HELPERS
import { slideServices } from "@/components/Hero/data";

/// COMPONENTS
import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/Hero";

/// SECTIONS
import Service from "@/page-sections/services/service/Service";



export default function Contact() {
    return (
        <>
             <BaseLayout
                title='RCI Holding'
                description=''
                >

                <Hero data={slideServices}/>
                <Service />

            </BaseLayout>

        </>
    )
}