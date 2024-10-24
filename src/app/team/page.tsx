"use client"
/// HELPERS
import { slideTeam } from "@/components/Hero/data";
import { goIvest } from "@/components/NavToPage/data";

/// COMPONENTS
import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/Hero";

/// SECTIONS
import Executive from "@/page-sections/team/executive/Executive";
import NavToPage from "@/components/NavToPage";


export default function Contact() {
    return (
        <>
             <BaseLayout
                title='RCI Holding'
                description=''
                showContact={false}
                >
                

                <Hero data={slideTeam}/>
                <Executive/>

            </BaseLayout>

        </>
    )
}