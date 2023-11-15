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