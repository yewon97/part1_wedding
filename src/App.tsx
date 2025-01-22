import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'

import Heading from '@components/sections/Heading'
import Video from '@components/sections/Video'
import FullScreenMessage from '@shared/FullScreenMessage'

import { Wedding } from '@models/wedding'
import ImageGallery from '@components/sections/ImageGallery'
import Intro from '@components/sections/Intro'

const cx = classNames.bind(styles)

export default function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('Failed to fetch wedding data')
        }

        return res.json()
      })
      .then((data) => setWedding(data))
      .catch((error) => {
        console.error(error)
        setError(true)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <FullScreenMessage type="loading" />
  }

  if (error) {
    return <FullScreenMessage type="error" />
  }

  if (wedding == null) {
    return null
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro },
  } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <Intro
        date={date}
        groomName={groom.name}
        brideName={bride.name}
        locationName={location}
        message={intro}
      />
      <ImageGallery images={galleryImages} />
    </div>
  )
}
