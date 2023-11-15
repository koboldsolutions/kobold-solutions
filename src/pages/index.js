import Head from 'next/head'
import Navbar from '@/components/Common/MainNavbar';
import Layout from '@/layouts/default';
import Loader from '@/components/Common/Loader';
import Header from '@/components/Common/Header';
import Marq from '@/components/Common/Marq';
import { useEffect, useLayoutEffect } from 'react';
import Intro from '@/components/Common/Intro';
import SectionImage from '@/components/Common/SectionImage';
import Projects from "@/components/Common/Projects"
import HzScroll from '@/components/Common/HorizontalScroll';
import Footer from '@/components/Common/Footer';




export default function Home() {
  
  const useIsomorphicLayoutEffect = typeof window !== "undefined" 
? useLayoutEffect 
: useEffect;

  useIsomorphicLayoutEffect(() => {
    document.body.classList.add('sub-bg');
    return () => document.body.classList.remove('sub-bg');
  }, []);
  

  return (
    <>
      <Head>
        <title>Kobold Solutions</title>
      </Head>
      <Loader />
      <Navbar mainBg />
      <main className="main-bg position-re">
        <Header />
        <Marq />
        <Intro />
        {/* <SectionImage /> */}
        <Projects />
        <HzScroll />
        {/* <Services /> */}
      </main>
      <Footer />
    </>   
  )
}

Home.getLayout = page => <Layout>{page}</Layout>
