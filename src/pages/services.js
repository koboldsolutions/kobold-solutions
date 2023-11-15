import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import ServicesHeader from '@/components/Services/ServicesHeader'
import ServicesTab from '@/components/Services/ServicesTab';
import ServicesScroll from '@/components/Services/ServicesScroll';
//import Services from '@/components/InnerPages/About/Services';
//import Portfolio from '@/components/InnerPages/Services/Portfolio';
//import ServicesTab from '@/components/DigitalAgency/ServicesTab';
//import FAQ from '@/components/InnerPages/Services/FAQ';
import CallToAction from '@/components/Common/CallToAction';
import ServicesSection from '@/components/Services/ServicesSection';
import Footer from '@/components/Common/Footer';

function PageServices() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  const headerMetadata = {
    subTitle: "¿ QUÉ OFRECEMOS ?",
    title: "Combinamos nuestra pasión por diseño y código.",
    text: "SERVICIOS"
  }

  return (
    <>
      <Head>
        <title>Kobold Solutions - Services</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <ServicesHeader data={headerMetadata} subBg={true} />
        <ServicesSection />
        <ServicesScroll />
        <ServicesTab />
        <CallToAction innerPageStyle />
      </main>
      <Footer />
    </>
  )
}

PageServices.getLayout = page => <Layout>{page}</Layout>

export default PageServices;