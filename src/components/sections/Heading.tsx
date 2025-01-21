import { parseISO, format, getDay } from 'date-fns'

import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './Heading.module.scss'

const cx = classNames.bind(styles)

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

export default function Heading({ date }: { date: string }) {
  const parsedDate = parseISO(date)
  const formattedDate = format(parsedDate, 'yy.MM.dd')

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>{formattedDate}</div>
      <div className={cx('txt-day')}>{DAYS[getDay(parsedDate)]}</div>
    </Section>
  )
}
