import { useRecoilState } from 'recoil'

import { useRouter } from 'next/router'

import MainLayout from './MainLayout'
import AuthLayout from './AuthLayout'
import { useEffect, useState } from 'react'
import { userDataAtom } from '@/lib/store'

const AppLayout = ({ children }) => {
  const [userData, setUserData] = useRecoilState(userDataAtom)
  const router = useRouter()

  useEffect(() => {
    if (router.pathname.includes('/auth/')) {
      return () => {}
    }

    // if (user?.data) {
    //   setUserData({ role: user.data.role })
    // }

    // if (!isLoading) {
    //   if (!user?.data) {
    //     // we don't want the user to redirect back to the login page
    //     // or any auth page
    //     if (!router.pathname.includes('auth')) {
    //       localStorage.setItem('redirect', router.pathname)
    //       // router.push('/auth/login')
    //     }
    //   }
    // }
  }, [router, setUserData])

  // THIS NEEDS TO BE CHANGED
  if (router.pathname.includes('/dashboard/') || router.pathname === '/404') {
    return <MainLayout>{children}</MainLayout>
  }

  return <AuthLayout>{children}</AuthLayout>
}

export default AppLayout
