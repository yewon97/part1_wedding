import { Location } from '@models/wedding'
import Section from '@components/shared/Section'
import classNames from 'classnames/bind'
import { useEffect, useRef } from 'react'
import styles from './Map.module.scss'

declare global {
  interface Window {
    kakao: any
  }
}

const cx = classNames.bind(styles)

export default function Map({ location }: { location: Location }) {
  const mapContainerRef = useRef<HTMLDivElement>(null)

  // 외부 스크립트 비동기적으로 호출
  useEffect(() => {
    const script = document.createElement('script')
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&autoload=false&libraries=services,clusterer,drawing`
    script.type = 'text/javascript'
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )
        const options = {
          center: position,
          level: 3,
        }
        const marker = new window.kakao.maps.Marker({
          position,
        })

        const map = new window.kakao.maps.Map(
          mapContainerRef.current as HTMLElement,
          options,
        )

        marker.setMap(map)
      })
    }
  }, [location])

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-title')}>오시는 길</span>
          <span className={cx('txt-subtitle')}>{location.name}</span>
          <span className={cx('txt-subtitle')}>{location.address}</span>
        </div>
      }
    >
      <div className={cx('wrap-map')}>
        <div className={cx('map')} ref={mapContainerRef} id="map" />
        <a
          href={location.link}
          className={cx('btn-find-way')}
          target="_blank"
          rel="noreferrer"
        >
          길찾기
        </a>
      </div>

      <div>
        <WayToCome label="버스" list={location.waytocome.bus} />
        <WayToCome label="지하철" list={location.waytocome.metro} />
      </div>
    </Section>
  )
}

function WayToCome({
  label,
  list,
}: {
  label: React.ReactNode
  list: string[]
}) {
  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('txt-label')}>{label}</div>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
