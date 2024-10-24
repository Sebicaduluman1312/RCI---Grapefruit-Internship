"use client"
/// HELPERS
import { slideCsr } from "@/components/Hero/data";

/// COMPONENTS
import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/Hero";

/// SECTIONS
import Mentions from "@/page-sections/csr/mentions/Mentions";
import Initiatives from "@/page-sections/csr/initiatives/Initiatives";
import Iso from "@/page-sections/csr/iso/Iso";


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
                <Mentions />
                <Iso />

            </BaseLayout>

        </>
    )
}