'use client'

import Image from "next/image"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'

const reviewData = [
    { avatar: '/reviews/avatar-1.png', name: 'Richard Thompson', job: 'Chef', reviews: 'Noi si partenerii nostri (retelele de socializare si agentiile de publicitate partenere, precum si furnizorii nostri de servicii de date analitice) prelucram date pentru a permite website-ului sa functioneze, pentru a personaliza continutul si anunturile publicitare afisate in ', },
    { avatar: '/reviews/avatar-2.png', name: 'Max Thompson', job: 'Designer', reviews: 'Noi si partenerii nostri (retelele de socializare si agentiile de publicitate partenere, precum si furnizorii nostri de servicii de date analitice) prelucram date pentru a permite website-ului sa functioneze, pentru a personaliza continutul si anunturile publicitare afisate in ', },
    { avatar: '/reviews/avatar-3.png', name: 'John Thompson', job: 'Boss', reviews: 'Noi si partenerii nostri (retelele de socializare si agentiile de publicitate partenere, precum si furnizorii nostri de servicii de date analitice) prelucram date pentru a permite website-ului sa functioneze, pentru a personaliza continutul si anunturile publicitare afisate in ', },
    {
        avatar: '/reviews/avatar-4.png', name: 'Emily Thompson', job: 'CEO',
        reviews: 'Noi si partenerii nostri (retelele de socializare si agentiile de publicitate partenere, precum si furnizorii nostri de servicii de date analitice) prelucram date pentru a permite website-ului sa functioneze, pentru a personaliza continutul si anunturile publicitare afisate in '
    },
    { avatar: '/reviews/avatar-1.png', name: 'Richard Gigel', job: 'Engineer', reviews: 'Noi si partenerii nostri (retelele de socializare si agentiile de publicitate partenere, precum si furnizorii nostri de servicii de date analitice) prelucram date pentru a permite website-ului sa functioneze, pentru a personaliza continutul si anunturile publicitare afisate in ' },
    { avatar: '/reviews/avatar-6.png', name: 'Gil Dobrica', job: 'Chef', reviews: 'Noi si partenerii nostri (retelele de socializare si agentiile de publicitate partenere, precum si furnizorii nostri de servicii de date analitice) prelucram date pentru a permite website-ului sa functioneze, pentru a personaliza continutul si anunturile publicitare afisate in ' },
    { avatar: '/reviews/avatar-5.png', name: 'Richard Thompson', job: 'Chef', reviews: 'Noi si partenerii nostri (retelele de socializare si agentiile de publicitate partenere, precum si furnizorii nostri de servicii de date analitice) prelucram date pentru a permite website-ului sa functioneze, pentru a personaliza continutul si anunturile publicitare afisate in' },
]

const Reviews = () => {
    return (
        <section className="mb-12 xl:mb-32">
            <div className="container mx-auto" >
                <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
                {/* swiper  */}
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1400: { slidesPerView: 3 }
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="h-[350px]"
                >

                    {reviewData.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                                    <CardHeader className='p-0 mb-10'>
                                    <div className="flex items-center gap-x-4">
                                    {/* image */}
                                    <Image 
                                    src={person.avatar} width={70} height={70} alt="" priority
                                    />
                                    {/* name  */}
                                    <div className="flex flex-col">
                                        <CardTitle>{person.name}</CardTitle>
                                    <p>{person.job}</p>
                                    </div>
                                    </div>    
                                    </CardHeader>
                                    <CardDescription className='text-lg text-muted-foreground'>{person.reviews}</CardDescription>
                                    
                                    </Card>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

        </section>
    )
}
export default Reviews