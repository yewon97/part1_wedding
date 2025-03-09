import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './Calendar.module.scss'

import { format, parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'

import 'react-day-picker/style.css'
import { DayPicker } from 'react-day-picker'

const cx = classNames.bind(styles)

const css = `
	.rdp-month_caption, .rdp-nav {
		display: none;
	}
	.rdp-day_button {
		cursor: default;
	}
	.rdp-weekday {
		font-size: 2.8rem;
	}
	.rdp-day_button {
		font-size: 2.2rem;
	}
	.rdp-selected .rdp-day_button {
		background-color: var(--red);
		border-color: var(--red);
		color: var(--beige);
	}
`

export default function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)
  console.log('weddingDate: ', weddingDate)

  return (
    <Section
      className={cx('calendar')}
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'aaa h시 eeee', { locale: ko })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          mode="single"
          selected={weddingDate}
          formatters={{
            formatCaption: () => '',
          }}
        />
      </div>
    </Section>
  )
}
