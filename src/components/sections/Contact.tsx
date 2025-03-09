import Section from '@/components/shared/Section'
import classNames from 'classnames/bind'
import styles from './Contact.module.scss'
import Accordion from '@shared/Accordion'
import { Person, Wedding } from '@/models/wedding'
import CopyToClipboard from 'react-copy-to-clipboard'

const cx = classNames.bind(styles)

const ClipboardComponent = CopyToClipboard as any

export default function Contact({
  groom,
  bride,
}: {
  groom: Wedding['groom']
  bride: Wedding['bride']
}) {
  return (
    <Section title="연락처 및 마음 전하실 곳">
      <Accordion label="신랑측">
        <ContactInfo {...groom} />
        <ContactInfo {...groom.parents[0]} />
        <ContactInfo {...groom.parents[1]} />
      </Accordion>
      <Accordion label="신부측">
        <ContactInfo {...bride} />
        <ContactInfo {...bride.parents[0]} />
        <ContactInfo {...bride.parents[1]} />
      </Accordion>
    </Section>
  )
}

function ContactInfo({ name, account, phoneNumber }: Person) {
  return (
    <div className={cx('wrap-contact')}>
      {/* 정보표현 */}
      <div className={cx('wrap-contact-info')}>
        <span>{`${account.bankName} | ${account.accountNumber}`}</span>
        <span>{name}</span>
        <span>{phoneNumber}</span>
      </div>
      {/* 버튼들 */}
      <ul className={cx('wrap-buttons')}>
        <li>
          <a href={`tel:${phoneNumber}`} className={cx('button')}>
            전화
          </a>
        </li>
        <li>
          <ClipboardComponent
            text={`${account.bankName} ${account.accountNumber}`}
            onCopy={() => {
              alert('복사되었습니다.')
            }}
          >
            <button type="button" className={cx('button')}>
              복사
            </button>
          </ClipboardComponent>
        </li>
        {account.kakaopayLink && (
          <li>
            <a
              href={account.kakaopayLink}
              target="_blank"
              className={cx('button')}
              rel="noreferrer"
            >
              송금
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}
