import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

import MainLayout from './MainLayout'
import AuthLayout from './AuthLayout'
import { useEffect, useState } from 'react'
import { userDataAtom } from '@/lib/store'

const AppLayout = ({ children }) => {
  const [userData, setUserData] = useRecoilState(userDataAtom)
  const router = useRouter()

  if (router.pathname.includes('/dashboard/') || router.pathname === '/404') {
    return <MainLayout>{children}</MainLayout>
  }

  return <AuthLayout>{children}</AuthLayout>
}

export default AppLayout
