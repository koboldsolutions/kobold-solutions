import React from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';  // Importa el hook useTranslation
import prefix from '@/common/prefix';

function ServicesTab({ lightMode }) {
  const { t, i18n } = useTranslation('common');  // Obtén t y ready del hook

  


  function openTab(event) {
    document.querySelectorAll('.tab-content').forEach(element => element.style.display = 'none');
    const tabId = event.currentTarget.getAttribute('data-tab');
    document.querySelector(`.tab-content#${tabId}`).style.display = 'block';
  }

  return (
    <section className="services-tab section-padding">
      <div className="container">
        <div className="row" id="tabs">
          <div className="col-lg-6 order2">
            <div className="serv-tab-cont mb-80">
              <div className="tab-content current" id="tabs-1">
                <div className="item">
                  <div className="img">
                    <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/landing/pilares.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/icons/0.png`} alt="" />
                    </div>
                    <div className="text">
                      <p suppressHydrationWarning>{t('services-tab.service1Text')}</p>  {/* Usar t() para traducir el texto */}
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15" suppressHydrationWarning>{t('services-tab.readMore')}</span>  {/* Traducir "Read More" */}
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-2">
                <div className="item">
                  <div className="img">
                    <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/landing/pilares.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/icons/1.png`} alt="" />
                    </div>
                    <div className="text">
                      <p suppressHydrationWarning>{t('services-tab.service2Text')}</p>  {/* Usar t() para traducir el texto */}
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15" suppressHydrationWarning>{t('services-tab.readMore')}</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-3">
                <div className="item">
                  <div className="img">
                    <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/landing/pilares.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/icons/2.png`} alt="" />
                    </div>
                    <div className="text">
                      <p suppressHydrationWarning>{t('services-tab.service3Text')}</p>  {/* Usar t() para traducir el texto */}
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15" suppressHydrationWarning>{t('services-tab.readMore')}</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-4">
                <div className="item">
                  <div className="img">
                    <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/landing/pilares.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/icons/0.png`} alt="" />
                    </div>
                    <div className="text">
                      <p suppressHydrationWarning>{t('services-tab.service4Text')}</p>  {/* Usar t() para traducir el texto */}
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15" suppressHydrationWarning>{t('services-tab.readMore')}</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign order1">
            <div className="serv-tab-link tab-links full-width md-mb50">
              <div className="sec-lg-head mb-80">
                <h6 className="dot-titl mb-15" suppressHydrationWarning>{t('services-tab.philosophy')}</h6>  {/* Traducir el título */}
                <p></p>
              </div>
              <ul className="rest">
                <li className="item-link current mb-15" data-tab="tabs-1" onClick={openTab} suppressHydrationWarning>
                  <span>01</span>{t('services-tab.tab1')}  {/* Traducir los tabs */}
                </li>
                <li className="item-link mb-15" data-tab="tabs-2" onClick={openTab} suppressHydrationWarning>
                  <span>02</span>{t('services-tab.tab2')}
                </li>
                <li className="item-link mb-15" data-tab="tabs-3" onClick={openTab} suppressHydrationWarning>
                  <span>03</span>{t('services-tab.tab3')}
                </li>
                <li className="item-link" data-tab="tabs-4" onClick={openTab} suppressHydrationWarning>
                  <span>04</span>{t('services-tab.tab4')}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesTab;
