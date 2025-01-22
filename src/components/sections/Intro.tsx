import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './Intro.module.scss'

import { Location } from '@models/wedding'
import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import Text from '@shared/Text'

const cx = classNames.bind(styles)

interface IntroProps {
  groomName: string
  brideName: string
  locationName: Location
  date: string
  message: string
}

export default function Intro({
  groomName,
  brideName,
  locationName,
  date,
  message,
}: IntroProps) {
  return (
    <Section className={cx('container')}>
      <div className={cx('wrap-persons')}>
        <span>{groomName}</span>
        <IconHeart className={cx('icon-heart')} />
        <span>{brideName}</span>
      </div>
      <div className={cx('wrap-location')}>
        <span>{format(parseISO(date), 'yyyy년 M월 d일', { locale: ko })}</span>
        <span>{locationName.name}</span>
        <span>{locationName.address}</span>
      </div>
      <div className={cx('wrap-message')}>
        <Text>{message}</Text>
      </div>
    </Section>
  )
}

function IconHeart({ className }: { className: string }) {
  return (
    <svg
      className={className}
      id="Layer_1"
      version="1.1"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <polygon
          className={cx('st0')}
          points="114,34 114,24 104,24 104,14 74,14 74,24 64,24 54,24 54,14 24,14 24,24 14,24 14,34 4,34 4,64 14,64    14,74 24,74 24,84 34,84 34,94 44,94 44,104 54,104 54,114 64,114 124,54 124,34  "
        />
      </g>
      <g>
        <rect className={cx('st1')} height="10" width="10" x="24" y="34" />
      </g>
      <g>
        <g>
          <rect className={cx('st2')} height="10" width="10" x="64" y="104" />
        </g>
        <g>
          <rect className={cx('st2')} height="10" width="10" x="74" y="94" />
        </g>
        <g>
          <rect className={cx('st2')} height="10" width="10" x="84" y="84" />
        </g>
        <g>
          <rect className={cx('st2')} height="10" width="10" x="94" y="74" />
        </g>
        <g>
          <rect className={cx('st2')} height="10" width="10" x="104" y="64" />
        </g>
        <g>
          <rect className={cx('st2')} height="10" width="10" x="114" y="54" />
        </g>
      </g>
    </svg>
  )
}
