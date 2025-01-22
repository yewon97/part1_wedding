import ImageViewer from '@components/ImageViewer'
import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './ImageGallery.module.scss'

const cx = classNames.bind(styles)

export default function ImageGallery({ images }: { images: string[] }) {
  return (
    <>
      <Section title="사진첩">
        <ul className={cx('wrap-images')}>
          {images.map((src, index) => (
            <li key={index} className={cx('wrap-image')}>
              <img src={src} alt="gallery" />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer images={images} />
    </>
  )
}
