import { useRouter } from 'next/router'
import style from './MainLayout.module.scss'

const MainLayout = ({ children }) => {
  const router = useRouter()

  return (
    <>
      <div className={style.main_sidebar}></div>
      <div className={style.main_navbar}>
        <div className={style.logo_style}></div>
      </div>
      <div>{children}</div>
    </>
  )
}

export default MainLayout
