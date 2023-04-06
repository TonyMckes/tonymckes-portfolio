'use client'

import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Pagination,
  type SwiperOptions,
} from 'swiper'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import type { Repository } from 'types/repositories-types'
import { Project } from './Project'

function Carousel({ repositories }: { repositories: Repository[] }) {
  const swiperOptions: SwiperOptions = {
    modules: [Pagination, A11y, EffectCoverflow, Autoplay],
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 25,
      slideShadows: false,
    },
    pagination: {
      clickable: true,
      bulletClass: 'swiper-pagination-bullet bg-night-900 dark:bg-neutral-100',
    },
    wrapperClass: 'grid grid-flow-col pb-20',
    centeredSlides: true,
    spaceBetween: 50,
    breakpoints: {
      768: { slidesPerView: 1 },
      1440: { slidesPerView: 1.4 },
      2560: { slidesPerView: 2.5 },
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 600,
    loop: true,
    a11y: { enabled: true },
  }

  return (
    <Swiper className="mx-auto mt-10 px-2" {...swiperOptions}>
      {repositories.map((repo) => {
        return (
          <SwiperSlide key={repo.id} className="flex">
            <Project imgUrl={repo.openGraphImageUrl} {...repo} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Carousel
