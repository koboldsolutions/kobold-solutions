import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

function ContactHeader() {
  const { t, i18n} = useTranslation('common');
  
 

 
  

  return (
    <header className="page-header section-padding sub-bg">
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="sub-title">{t('contact-page.title')}</h6>
              <h1 className="fz-55">{t('contact-page.slogan')}<br /> {t('contact-page.slogan2')} </h1>
            </div>
          </div>
          <div className="col-lg-5 valign">
            <div className="text">
              <p>{t('contact-page.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default ContactHeader;
