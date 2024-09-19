"use client"
/// HELPERS
import { slideContact } from "@/components/Hero/data";

/// COMPONENTS
import BaseLayout from "@/components/BaseLayout";
import Hero from "@/components/Hero";

/// SECTIONS
import ContactForm from "@/page-sections/contact/ContactForm/ContactForm";
import ImageSection from "@/page-sections/contact/ImageSection/ImageSection";


export default function Contact() {
    return (
        <>
             <BaseLayout
                title='RCI Holding'
                description=''
                showContact={false}
                >

                <Hero data={slideContact}/>
                <ContactForm />
                <ImageSection />

            </BaseLayout>

        </>
    )
}