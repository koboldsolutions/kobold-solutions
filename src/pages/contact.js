import React, { useEffect } from 'react';
//= Packages
import MarketingMeta from '@/components/Common/MarketingMeta';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Common/Footer';
import ContactHeader from '@/components/Contact/ContactHeader';
import ContactForm from '@/components/Contact/ContactForm';






function PageContact() {
  

  return (
    <>
      <MarketingMeta page="contact" />

      <Loader />
      <Navbar mainBg />
      <main className="ks-site">
        <ContactHeader />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}

PageContact.getLayout = page => <Layout>{page}</Layout>

export default PageContact;