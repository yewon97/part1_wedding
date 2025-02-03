import Text from '@components/shared/Text'
import Section from '@components/shared/Section'
import classNames from 'classnames/bind'
import styles from './Invitation.module.scss'

const cx = classNames.bind(styles)

export default function Invitation({ message }: { message: string }) {
  return (
    <Section className={cx('container')}>
      <IconPost className={cx('icon-post')} />
      <Text>{message}</Text>
    </Section>
  )
}

function IconPost({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className}>
      <g data-name="19. Send" id="_19._Send">
        <path
          fill="#04009a"
          d="M21,16.6a3,3,0,0,1-1.66-.51l-4.89-3.26a1,1,0,0,1,1.1-1.66l4.9,3.26a1,1,0,0,0,1.1,0l4.9-3.26a1,1,0,0,1,1.1,1.66l-4.89,3.26A3,3,0,0,1,21,16.6Z"
        />
        <path
          fill="#04009a"
          d="M29,25H13a3,3,0,0,1-3-3V10a3,3,0,0,1,3-3H29a3,3,0,0,1,3,3V22A3,3,0,0,1,29,25ZM13,9a1,1,0,0,0-1,1V22a1,1,0,0,0,1,1H29a1,1,0,0,0,1-1V10a1,1,0,0,0-1-1Z"
        />
        <path fill="#77acf1" d="M7,19H5a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z" />
        <path fill="#77acf1" d="M7,15H3a1,1,0,0,1,0-2H7a1,1,0,0,1,0,2Z" />
        <path fill="#77acf1" d="M7,11H1A1,1,0,0,1,1,9H7a1,1,0,0,1,0,2Z" />
      </g>
    </svg>
  )
}
