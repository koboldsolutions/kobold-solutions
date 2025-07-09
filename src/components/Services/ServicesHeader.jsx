import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

function ServicesHeader({ data, subBg }) {
  const { t, i18n } = useTranslation('common');
  



  return (
    <header className={`page-header section-padding pb-0 ${subBg ? 'sub-bg' : ''}`}>
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-8">
            <div className="caption">
              <h6 className="sub-title">{t('services.subtitle')}</h6>
              <h1 className="fz-55">{t('services.title')}</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5 offset-lg-4">
            <div className="text mt-30">
              <p>{t('services.description')}</p> {/* Usar la clave de traducción para el texto */}
            </div>
          </div>
        </div>
      </div>
      <div className="main-marq xlrg section-padding pb-0">
        <div className="slide-har st1">
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>{t(data.text)}</h4>
                </div>
              ))
            }
          </div>
          <div className="box">
            {
              new Array(5).fill().map((_, i) => (
                <div className="item" key={i}>
                  <h4>{t(data.text)}</h4>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default ServicesHeader;
