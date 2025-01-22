import { useEffect } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import './swiper.css'

import styles from './ImageViewer.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function ImageViewer({
  images,
  open = false,
  selectedIdx = -1,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
  onClose: () => void
}) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.height = '100%'
    } else {
      document.body.style.overflow = 'auto'
      document.body.style.position = 'static'
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.body.style.position = 'static'
    }
  }, [open])

  if (open === false) {
    return null
  }

  return (
    <div className={cx('dimmed')}>
      <CloseButton onClick={onClose} className={cx('icon-close')} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt="gallery viewer" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

function CloseButton({
  onClick,
  className,
}: {
  onClick: () => void
  className: string
}) {
  return (
    <svg
      height="512px"
      id="Layer_1"
      viewBox="0 0 512 512"
      width="512px"
      onClick={onClick}
      className={className}
    >
      <path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z" />
    </svg>
  )
}
