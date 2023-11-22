'use client'

import ProjectCard from "@/components/ProjectCard"
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"


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

// remove duplicates category 
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),];


const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>)
            })}
          </TabsList>

          {/* tabs content  */}
          <div className="text-lg xl:mt-8 grid gridcols1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              )
            })}

          </div>
        </Tabs>
      </div>
    </section>
  )
}
export default Projects