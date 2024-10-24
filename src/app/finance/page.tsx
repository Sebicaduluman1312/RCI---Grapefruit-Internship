"use client";
/// HELPERS
import { slideFinance } from "@/components/Hero/data";

/// COMPONENTS
import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/Hero";

/// SECTIONS
import FinanceServices from "@/page-sections/finance/services/FinanceServices";
import Solutions from "@/page-sections/finance/solutions/Solutions";
import Companies from "@/page-sections/finance/companies/Companies";
import Projects from "@/page-sections/finance/projects/Projects";


export default function Terms(){
    return (
        <>
             <BaseLayout
                title='RCI Holding'
                description=''
                showContact={false}
                >

                <Hero data={slideFinance}/>
                <FinanceServices />
                <Solutions />
                <Companies />
                <Projects />

            </BaseLayout>

        </>
    )
}