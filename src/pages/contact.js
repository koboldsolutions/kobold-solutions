import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Common/Footer';
import ContactHeader from '@/components/Contact/ContactHeader';
import ContactForm from '@/components/Contact/ContactForm';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';




export async function getStaticProps({ locale }) {
   console.log("Ejecutando getStaticProps con locale:", locale); // Verifica si llega aquí
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}


function PageContact() {
  

  return (
    <>
      <Head>
        <title>Kobold Solutions - Contact</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <ContactHeader />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

PageContact.getLayout = page => <Layout>{page}</Layout>

export default PageContact;