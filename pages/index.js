import Image from 'next/image'
import Link from 'next/link.js'

import style from '@/styles/Home.module.scss'
import imagesArray from '../public/images/images.js'

export default function Home() {
  return (
    <div className={style.home_page}>
      <div className={style.header_left}>
        <div>Become Fitter, Stronger & More Confident !</div>
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
