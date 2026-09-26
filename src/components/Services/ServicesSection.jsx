import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import StatementSplitter from '@/components/Common/StatementSplitter';
import prefix from '@/common/prefix';

function ServicesSection({ lightMode }) {
  const { t, i18n } = useTranslation('common'); // Desestructurar el hook
  
  const [data, setData] = useState([]);

  // Asegúrate de que las traducciones están listas antes de renderizar el componente
  useEffect(() => {
     {
      setData([
        {
          id: 1,
          image: '/assets/imgs/icons/0.png',
          title: t('services-page2.service1Title'),
          text: t('services-page2.service1Text'),
        },
        {
          id: 2,
          image: '/assets/imgs/icons/1.png',
          title: t('services-page2.service2Title'),
          text: t('services-page2.service2Text'),
        },
        {
          id: 3,
          image: '/assets/imgs/icons/2.png',
          title: t('services-page2.service3Title'),
          text: t('services-page2.service3Text'),
        },
      ]);
    }
  }, [t]); // El hook depende de `ready` y `t`


  return (
    <section className="serv-box section-padding">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h6 className="dot-titl mb-10">{t('services-page2.title')}</h6>
                <h2 className="fz-60 fw-700">{t('services-page2.mainTitle')}</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text">
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {data.map(item => (
            <div className="col-lg-4" key={item.id}>
              <div className="serv-item md-mb50 radius-10">
                <div className="icon-img-60 mb-40">
                  <img
                    src={`${prefix}/${lightMode ? 'light' : 'dark'}/${item.image}`}
                    alt=""
                  />
                </div>
                <h5 className="mb-30 pb-30 bord-thin-bottom">
                  <StatementSplitter statement={item.title} />
                </h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
