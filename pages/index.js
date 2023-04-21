import Image from 'next/image'

import style from '@/styles/Home.module.scss'
import imagesArray from '../public/images/images.js'

export default function Home() {
  return (
    <div className={style.home_page}>
      <div className={style.header_left}>
        <div>Become Fitter, Stronger & More Confident !</div>
        <button className={style.header_button}>Get Started</button>
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
