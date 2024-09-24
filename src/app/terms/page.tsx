"use client";
/// HELPERS
import { slideTerm } from "@/components/Hero/data";

/// COMPONENTS
import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/Hero";

/// SECTIONS
import Term from "@/page-sections/term/Term";


export default function Terms(){
    return (
        <>
             <BaseLayout
                title='RCI Holding'
                description=''
                showContact={false}
                >

                <Hero data={slideTerm}/>
                <Term />


            </BaseLayout>

        </>
    )
}