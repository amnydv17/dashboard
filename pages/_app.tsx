import 'tailwindcss/tailwind.css';
import type { AppProps } from "next/app";
import Navbar from '@/pages/components/Navbar'
import Dashboard from '@/pages/index'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    </>
  );
}
