"use client"
///HELPERS
import { slideAbout } from "@/components/Hero/data";
import image from '../../page-sections/about/assets/europe.png';
import { getSession } from 'next-auth/react';
import { GetServerSidePropsContext } from 'next';



/// COMPONENTS
import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/Hero";
import Brochure from "@/components/Brochure";


/// SECTIONS
import Company from "@/page-sections/about/Company/Company";
import KeyFacts from "@/page-sections/about/KeyFacts/KeyFacts";
import Group from "@/page-sections/about/Group/Group";
import Certifications from "@/page-sections/about/Certifications/Certifications";
import Discover from "@/page-sections/about/Discover/Discover";
import Values from "@/page-sections/about/Values/Values";
import History from "@/page-sections/about/History/History";
import Team from "@/page-sections/about/Team/Team";



export default function About() {
        
   return (
        <>
            <BaseLayout
            title='RCI Holding'
            description=''>

                <Hero data={slideAbout}/>
                <Company />
                <KeyFacts />
                <Group />
                <Certifications />
                <Discover />
                <Values />
                <Brochure downloadLink={image.src}/>
                <History />
                <Team />

            </BaseLayout>
        </>
   );
}