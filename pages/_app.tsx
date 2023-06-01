import type { AppProps } from 'next/app'
import '../styles/pages/app.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
