import Image from 'next/image'
import Link from 'next/link.js'

import style from '@/styles/Home.module.scss'
import imagesArray from '../public/images/images.js'
import { darkState } from '../lib/store.js'
import { useRecoilValue } from 'recoil'

export default function Home() {
  const dark = useRecoilValue(darkState)
  return (
    <div className={`${style['home_page']} ${dark ? style.dark : ''}`}>
      <div className={`${style['header_left']} ${dark ? style.dark : ''}`}>
        <div>Become Fitter, Stronger & More Confident!</div>
        <Link href="/auth/login" className={style.header_link}>
          Get Started
        </Link>
      </div>
      <div className={style.header_right}>
        <Image
          src={imagesArray.pic1}
          width={100}
          height={100}
          alt="homeImage"
        />
      </div>
    </div>
  )
}
