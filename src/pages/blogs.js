import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Common/Footer';
import BlogsHeader from '@/components/Blog/BlogsHeader';
import BlogList from '@/components/Blog/BlogList';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  console.log("Ejecutando getStaticProps con locale:", locale); // Verifica si llega aquí

  const translations = await serverSideTranslations(locale, ['common']);

  return {
    props: {
      ...translations,
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
        <BlogsHeader />
        <BlogList />
      </main>
      <Footer />
    </>
  )
}

PageContact.getLayout = page => <Layout>{page}</Layout>

export default PageContact;