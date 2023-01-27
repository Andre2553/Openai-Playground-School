import { Header } from '@/components/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Router } from 'next/router';
import NProgress from "nprogress"; // nprogress module
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
