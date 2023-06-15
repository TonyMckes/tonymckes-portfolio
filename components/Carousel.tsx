'use client'

import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Keyboard,
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
    modules: [Pagination, A11y, EffectCoverflow, Autoplay, Keyboard],
    wrapperClass: 'swiper-wrapper pb-20',
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
      bulletClass: 'swiper-pagination-bullet bg-night-900 dark:bg-neutral-100',
      // dynamicBullets: true,
      // dynamicMainBullets: 3,
    },
    breakpoints: {
      768: { slidesPerView: 1 },
      1440: { slidesPerView: 1.4 },
      2560: { slidesPerView: 2.5 },
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    a11y: { enabled: true },
  }

  return (
    <Swiper wrapperTag="ul" className="mx-auto !px-2" {...swiperOptions}>
      {repositories.map((repo) => {
        return (
          <SwiperSlide
            key={repo.id}
            className="!flex !h-auto overflow-hidden rounded-xl md:overflow-visible lg:overflow-hidden"
          >
            <Project {...repo} />
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default Carousel
