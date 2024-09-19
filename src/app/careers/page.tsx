"use client";

import BaseLayout from "@/components/BaseLayout";

/// HELPERS
import { slideCareers } from "@/components/Hero/data";

/// COMPONENTS
import Hero from "@/components/Hero";

/// SECTIONS
import Oportunities from "@/page-sections/careers/Oportunities/Oportunities";
import Values from "@/page-sections/careers/Values/Values";
import Now from "@/page-sections/careers/Now/Now";



export default function Careers () {
    return (
        <div>
            <BaseLayout
                title='RCI Holding'
                description=''
                showContact={false}
                >

                <Hero data={slideCareers}/>
                <Oportunities />
                <Values />
                <Now />

            </BaseLayout>
            
        </div>
    )
}