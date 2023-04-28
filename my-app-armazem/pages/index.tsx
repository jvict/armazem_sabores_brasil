import {Inter} from '@next/font/google'
import { Home } from '@/containers/Home'

const inter = Inter({ subsets: ['latin'] })

export default function Index() {
  return (
      <Home/>
  )
}
