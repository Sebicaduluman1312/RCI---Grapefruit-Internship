"use client"

/// HELPERS
import { slideNews } from "@/components/Hero/data"
import { newsNavData } from "@/components/NavToPage/data"

/// COMPONENTS
import BaseLayout from "@/components/BaseLayout"
import Hero from "@/components/Hero"

/// SECTIONS
import NewsPage from "@/page-sections/news/NewsPage/NewsPage"
import NavToPage from "@/components/NavToPage"


export default function News() {
    return(
        <BaseLayout
            title='RCI Holding'
            description=''
            showContact={false}
            showProjects={false}
        >
            <Hero data={slideNews} />
            <NewsPage />
            <NavToPage data={newsNavData}/>

        </BaseLayout>
    )
}