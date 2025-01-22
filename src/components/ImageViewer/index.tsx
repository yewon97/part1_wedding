import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'

import styles from './ImageViewer.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function ImageViewer({ images }: { images: string[] }) {
  return (
    <div className={cx('dimmed')}>
      <Swiper spaceBetween={20} slidesPerView={1} loop={true} initialSlide={0}>
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt="gallery viewer" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
