"use client";

import '../scss/main.scss';

/// HELPERS
import { slides } from "@/components/Hero/data";
import { useEffect, useState } from 'react';


/// COMPONENTS
import Hero from "@/components/Hero";
import BaseLayout from '@/components/BaseLayout';
import SkeletonComponent from '@/components/Skeleton';

/// PAGE SECTIONS
import Welcome from "@/page-sections/home/Welcome/Welcome";
import Services from "@/page-sections/home/Services/Services";
import Projects from "@/page-sections/home/Projects/Projects";
import Networks from '@/page-sections/home/Networks/Networks';


export default function Home(){

    const [ loading, setLoading ] = useState(false);


    useEffect(() => {
        setTimeout(() => setLoading(false), 5000);
    }, []);

    return (
        <>
            {
                loading ? 
                (
                    <SkeletonComponent />
                ) : 
                (
                    <BaseLayout
                    title='RCI Holding'
                    description=''
                    >
                        <Hero data={slides}/>
                        <Welcome />
                        <Services />
                        <Projects />
                        <Networks />
                    </BaseLayout>
                )
            }
        </>
    );
}