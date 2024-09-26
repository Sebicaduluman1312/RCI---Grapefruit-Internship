"use client";

import BaseLayout from "@/components/BaseLayout";

/// HELPERS
import { slideClients } from "@/components/Hero/data";

/// COMPONENTS
import Hero from "@/components/Hero";

/// SECTIONS
import Partners from "@/page-sections/clients/Partners/Partners";
import Values from "@/page-sections/careers/Values/Values";
import Logos from "@/page-sections/clients/Logos/Logos";


export default function Careers () {
    return (
        <div>
            <BaseLayout
                title='RCI Holding'
                description=''
                showContact={false}
                showNewsletter={false}
                showProjects={false}
                >

                <Hero data={slideClients}/>
                <Partners />
                <Values />
                <Logos />

            </BaseLayout>
            
        </div>
    )
}