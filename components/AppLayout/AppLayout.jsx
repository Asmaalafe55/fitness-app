import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

import MainLayout from './MainLayout'
import AuthLayout from './AuthLayout'
import { useEffect, useState } from 'react'
import { userDataAtom } from '@/lib/store'

const AppLayout = ({ children }) => {
  const [userData, setUserData] = useRecoilState(userDataAtom)
  const router = useRouter()

  //   const user = getUserData(); // Retrieve the user data from your storage or state

  //   useEffect(() => {
  //     if (router.pathname.includes('/auth/')) {
  //       return;
  //     }

  //     if (!user?.data) {
  //       if (!router.pathname.includes('auth')) {
  //         localStorage.setItem('redirect', router.pathname);
  //         router.push('/auth/login');
  //       }
  //     }
  //   }, [router, user]);

  //   if (router.pathname.includes('/dashboard/')) {
  //     if (!user?.data) {
  //       // Redirect the user to the login page if not authenticated
  //       router.push('/auth/login');
  //       return null; // Return null while the redirection happens
  //     }

  //     return <AuthLayout>{children}</AuthLayout>;
  //   }

  //   if (router.pathname === '/404') {
  //     return <AuthLayout>{children}</AuthLayout>;
  //   }

  //   return <MainLayout>{children}</MainLayout>;
  // }

  if (router.pathname.includes('/dashboard/') || router.pathname === '/404') {
    return <AuthLayout>{children}</AuthLayout>
  }

  return <MainLayout>{children}</MainLayout>
}

export default AppLayout

// useEffect(() => {
//   // if (router.pathname.includes('/auth/')) {
//   //   return () => {}
//   // }
//   // if (user?.data) {
//   //   setUserData({ role: user.data.role })
//   // }
//   // if (!isLoading) {
//   //   if (!user?.data) {
//   //     // we don't want the user to redirect back to the login page
//   //     // or any auth page
//   //     if (!router.pathname.includes('auth')) {
//   //       localStorage.setItem('redirect', router.pathname)
//   //       // router.push('/auth/login')
//   //     }
//   //   }
//   // }
// }, [router, setUserData])
