import AppLayout from '@/components/AppLayout/AppLayout'
import '@/styles/globals.css'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </RecoilRoot>
  )
}
