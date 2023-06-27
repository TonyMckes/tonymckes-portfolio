'use client'

import { Children, useState, type ReactNode } from 'react'
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

function Carousel({ children }: { children: ReactNode }) {
  const [initialized, setInitialized] = useState(false)

  const swiperOptions: SwiperOptions = {
    modules: [Pagination, A11y, EffectCoverflow, Autoplay, Keyboard],

    wrapperClass: `swiper-wrapper pb-20 ${
      initialized ? '' : 'snap-x overflow-x-auto snap-mandatory '
    } `,
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
    <Swiper
      wrapperTag="ul"
      onInit={(swiper) => setInitialized(!swiper.destroyed)}
      {...swiperOptions}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlide
          key={index}
          className={`!flex !h-auto overflow-hidden rounded-xl md:overflow-visible lg:overflow-hidden ${
            initialized
              ? 'px-2 xl:px-0'
              : 'max-w-container snap-center first:lg:!ml-[64rem] last:lg:!mr-[64rem]'
          }`}
        >
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
