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
        <span>
          {format(parseISO(date), 'yyyy년 M월 d일 eeee', { locale: ko })}
        </span>
        <span>{locationName.name}</span>
        <span>{locationName.address}</span>
      </div>

      <IconFlower className={cx('icon-flower')} />

      <div className={cx('wrap-message')}>
        <Text>{message}</Text>
      </div>
    </Section>
  )
}

function IconHeart({ className }: { className: string }) {
  return (
    <svg className={className} id="Layer_1" version="1.1" viewBox="0 0 128 128">
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

function IconFlower({ className }: { className: string }) {
  return (
    <svg
      className={className}
      enable-background="new 0 0 64 64"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 64 64"
    >
      <path
        d="M29.1,8c-0.8-0.3-1.7-0.6-2.8-0.6c-4.3,0-6.7,3.4-6.7,7.4c0,7.4,12.5,13.7,12.5,13.7s12.5-6.4,12.5-13.7  c0-3.9-2.4-7.4-6.7-7.4l0,0c-4.3,0-5.8,3.4-5.8,3.4C30.6,9,29.1,8,29.1,8z"
        fill="#E64C3C"
      />
      <path
        d="  M29.1,8c-0.8-0.3-1.7-0.6-2.8-0.6c-4.3,0-6.7,3.4-6.7,7.4c0,7.4,12.5,13.7,12.5,13.7s12.5-6.4,12.5-13.7c0-3.9-2.4-7.4-6.7-7.4l0,0  c-4.3,0-5.8,3.4-5.8,3.4"
        fill="none"
        stroke="#2C3E50"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <path
        d="M43.3,41.8 M43.4,40H21.2c-1,0-2.2,1.1-2.2,2.1v4.4c0,1,1.2,1.5,2.2,1.5h1.2l1.8,9.9c0.2,1,1.1,2.1,2.1,2.1  h12c1,0,1.9-1.1,2.1-2.1l1.8-9.9h1.2c1,0,1.6-0.5,1.6-1.5v-4.4C45,41.1,44.3,40,43.4,40L43.4,40z"
        fill="#8C623B"
      />
      <path
        d="  M43.3,41.8 M43.4,40H21.2c-1,0-2.2,1.1-2.2,2.1v4.4c0,1,1.2,1.5,2.2,1.5h1.2l1.8,9.9c0.2,1,1.1,2.1,2.1,2.1h12c1,0,1.9-1.1,2.1-2.1  l1.8-9.9h1.2c1,0,1.6-0.5,1.6-1.5v-4.4C45,41.1,44.3,40,43.4,40L43.4,40z"
        fill="none"
        stroke="#2C3E50"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <line
        fill="none"
        stroke="#2C3E50"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
        x1="39"
        x2="25"
        y1="47"
        y2="47"
      />
      <line
        fill="none"
        stroke="#2C3E50"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
        x1="32.3"
        x2="32.3"
        y1="32.2"
        y2="39.3"
      />
      <path
        d="  M27.9,31.5c0,0,2.2,0.8,4.4,0.8s4.4-0.6,4.4-0.6"
        fill="none"
        stroke="#2C3E50"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <path
        d="M52.8,26.3c-2.3,1.7-7.7,1.2-10.7,3.7c-1.4,1.1-2.1,2.6-2.2,5.5c0,0.5-0.1,0.7,0.4,0.7  c4,0.1,6.4-0.2,8.2-1.3C51.2,33.2,52.3,29,52.8,26.3z"
        fill="#7ABE90"
      />
      <path
        d="M11.2,26.3c2.3,1.7,7.7,1.2,10.7,3.7c1.4,1.1,2.1,2.6,2.2,5.5c0,0.5,0.1,0.7-0.4,0.7c-4,0.1-6.4-0.2-8.2-1.3  C12.8,33.2,11.7,29,11.2,26.3z"
        fill="#7ABE90"
      />
      <path
        d="  M52.8,26.3c-2.3,1.7-7.7,1.2-10.7,3.7c-1.4,1.1-2.1,2.6-2.2,5.5c0,0.5-0.1,0.7,0.4,0.7c4,0.1,6.4-0.2,8.2-1.3  C51.2,33.2,52.3,29,52.8,26.3z"
        fill="none"
        stroke="#2C3E50"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
      <path
        d="  M11.2,26.3c2.3,1.7,7.7,1.2,10.7,3.7c1.4,1.1,2.1,2.6,2.2,5.5c0,0.5,0.1,0.7-0.4,0.7c-4,0.1-6.4-0.2-8.2-1.3  C12.8,33.2,11.7,29,11.2,26.3z"
        fill="none"
        stroke="#2C3E50"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
      />
    </svg>
  )
}
