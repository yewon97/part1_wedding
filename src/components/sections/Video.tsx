import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './Video.module.scss'

const cx = classNames.bind(styles)

export default function Video() {
  return (
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        controls={true}
        poster="/assets/poster.jpg"
      >
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}
