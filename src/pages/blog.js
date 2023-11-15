import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Common/Footer';
import BlogHeader from '@/components/Blog/Details/BlogHeader';
import BlogContent from '@/components/Blog/Details/BlogContent';



function PageContact() {
  

  return (
    <>
      <Head>
        <title>Kobold Solutions - Contact</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
        <BlogHeader />
        <BlogContent />
      </main>
      <Footer />
    </>
  )
}

PageContact.getLayout = page => <Layout>{page}</Layout>

export default PageContact;