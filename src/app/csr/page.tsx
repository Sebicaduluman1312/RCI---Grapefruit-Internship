"use client"
/// HELPERS
import { slideCsr } from "@/components/Hero/data";

/// COMPONENTS
import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/Hero";
import Initiatives from "@/page-sections/csr/initiatives/Initiatives";

/// SECTIONS



export default function Contact() {
    return (
        <>
             <BaseLayout
                title='RCI Holding'
                description=''
                showContact={false}
                >

                <Hero data={slideCsr}/>
                <Initiatives />

            </BaseLayout>

        </>
    )
}