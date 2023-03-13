import { AuthContextProvider } from '@/lib/firebase/auth_context'
import '@/styles/globals.css'
import Layout from '@/lib/Layout/Layout'
export default function App({ Component, pageProps }) {
  return  <AuthContextProvider> <Layout> <Component {...pageProps} /> </Layout></AuthContextProvider>
}
