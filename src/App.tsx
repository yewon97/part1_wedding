import FullScreenMessage from '@/components/shared/FullScreenMessage'
import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding2')
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

  return <div className={cx('container')}>{JSON.stringify(wedding)}</div>
}

export default App
