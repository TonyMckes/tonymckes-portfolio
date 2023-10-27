'use client'

import { ProjectCard } from 'components/ProjectCard'
import { tw } from 'lib/helpers'
import { useState } from 'react'
import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Pagination,
} from 'swiper/modules'
import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react'
import type { Repository } from 'types/repositories-types'

import 'swiper/css'
import 'swiper/css/pagination'

function Carousel({ projects }: { projects: Repository[] }) {
  const [initialized, setInitialized] = useState(false)

  const swiperOptions: SwiperProps = {
    modules: [Pagination, A11y, EffectCoverflow, Autoplay, Keyboard],

    wrapperClass: `swiper-wrapper pb-20 `,
    centeredSlides: true,
    spaceBetween: 50,
    effect: 'coverflow',
    speed: 600,
    loop: true,
    keyboard: true,
    //
    coverflowEffect: {
      rotate: 25,
      slideShadows: true,
    },
    pagination: {
      clickable: true,
      bulletClass: 'swiper-pagination-bullet bg-night-950 dark:bg-neutral-100',
      // dynamicBullets: true,
      // dynamicMainBullets: 3,
    },
    breakpoints: {
      1024: { slidesPerView: 'auto' },
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    a11y: { enabled: true },
  }

  return (
    <Swiper
      wrapperTag="ul"
      onInit={(swiper) => setInitialized(!swiper.destroyed)}
      {...swiperOptions}
    >
      {projects.map((repo) => (
        <SwiperSlide
          key={repo.id}
          tag="li"
          className={tw(
            'container !flex !h-auto overflow-hidden !rounded-xl p-2 md:p-0',
            initialized &&
              'snap-center first:lg:!ml-[64rem] last:lg:!mr-[64rem]',
          )}
        >
          <ProjectCard {...repo} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
