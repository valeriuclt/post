'use client'

import Link from "next/link"
import { Button } from "./ui/button"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        image: '/work/3.png',
        category: 'react js',
        name: 'fh  site',
        description: 'Poate nu vi se pare mare lucru, dar e unul dintre nenumăratele noastre exemple de inadecvare.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'react js',
        name: 'bfs site',
        description: 'Poate nu vi se pare mare lucru, dar e unul dintre nenumăratele noastre exemple de inadecvare.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'next js',
        name: 'hs hsfg site-ului',
        description: 'Poate nu vi se pare mare lucru, dar e unul dintre nenumăratele noastre exemple de inadecvare.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'next js',
        name: 'hsgf site-ului',
        description: 'Poate nu vi se pare mare lucru, dar e unul dintre nenumăratele noastre exemple de inadecvare.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'next js',
        name: 'ywt site-ului',
        description: 'Poate nu vi se pare mare lucru, dar e unul dintre nenumăratele noastre exemple de inadecvare.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'next js',
        name: 'site POHH',
        description: 'Poate nu vi se pare mare lucru, dar e unul dintre nenumăratele noastre exemple de inadecvare.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/1.png',
        category: 'fullstack',
        name: 'numele NMNN',
        description: 'Poate nu vi se pare mare lucru, dar e unul dintre nenumăratele noastre exemple de inadecvare.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'fullstack',
        name: 'appVB site-ului',
        description: 'Poate nu vi se pare mare lucru, dar e unul dintre nenumăratele noastre exemple de inadecvare.',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'fullstack',
        name: 'zzsda site',
        description: 'Poate nu vi se pare mare lucru, dar e unul dintre nenumăratele noastre exemple de inadecvare.',
        link: '/',
        github: '/',
    },
];

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/* text  */}
                <div className=" max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 
            xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Project</h2>
                    <p className="subtitle mb-8">Poate nu vi se pare mare lucru, </p>
                    <Link href='/projects'>
                    <Button>AllProjects</Button></Link>
                </div>

                {/* slider  */}
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper
                        className="h-[480px]"
                        slidesPerView={1}
                        breakpoints={{ 640: { slidesPerView: 2 }, }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {/* arata doar primele 4 proiecte  */}
                        {projectData.slice(0, 4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export default Work