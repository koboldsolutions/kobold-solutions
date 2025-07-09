import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';
import isInView from '@/common/isInView';
import prefix from '@/common/prefix';

function ServicesScroll({ lightMode }) {
  const { t, i18ny } = useTranslation('common'); // Usar el hook de traducción
  
  // Verificar si las traducciones están listas

  useEffect(() => {
    loadBackgroudImages();
    window.addEventListener('scroll', handleShowTabs);
    return () => window.removeEventListener('scroll', handleShowTabs);
  }, []);

  function handleShowTabs() {
    isInView({
      selector: '.portfolio-fixed .sub-bg .cont',
      isElements: true,
      callback(element) {
        if (element) {
          // Verificar si el elemento de tab existe antes de modificar la clase
          const tab = document.querySelector("#" + element.getAttribute('data-tab'));
          if (tab) {
            element.classList.add('current');
            tab.classList.add('current');
          }
        }
      },
      whenOutOfView(element) {
        if (element) {
          // Verificar si el elemento de tab existe antes de modificar la clase
          const tab = document.querySelector("#" + element.getAttribute('data-tab'));
          if (tab) {
            element.classList.remove('current');
            tab.classList.remove('current');
          }
        }
      }
    });

    const leftSide = document.getElementById('sticky_item');
    if (!leftSide) return;
    const width = leftSide.getBoundingClientRect().width;
    const portfolio = document.querySelector('.portfolio-fixed').getBoundingClientRect();

    if (portfolio.top < 75 && portfolio.height / 2 < portfolio.bottom + 400) {
      leftSide.style.position = 'fixed';
      leftSide.style.top = '0px';
      leftSide.style.width = width + 'px';
      leftSide.classList.remove('is_stuck')
    } else if (portfolio.height / 2 > portfolio.bottom + 400) {
      leftSide.style.position = 'absolute';
      leftSide.style.top = 'auto';
      leftSide.style.bottom = '0';
      leftSide.style.width = width + 'px';
      leftSide.classList.add('is_stuck')
    } else {
      leftSide.style.position = 'relative';
      leftSide.style.top = 'unset';
      leftSide.style.bottom = 'unset';
      leftSide.style.width = 'auto';
    }
  }

 

  // Datos de servicios (traducción de ejemplo)
  const data = [
    {
      "id": 1,
      "image": `assets/imgs/services/1.jpg`,
      "number": "01.",
      "type": t('services-page.type1'),
      "title": t('services-page.title1'),
      "text": t('services-page.text1'),
      "list-elements": [
        t('services-page.listItem1'),
        t('services-page.listItem2'),
        t('services-page.listItem3'),
        t('services-page.listItem4'),
        t('services-page.listItem5'),
        t('services-page.listItem6')
      ]
    },
    {
      "id": 2,
      "image": `/assets/imgs/services/2.jpg`,
      "number": "02.",
      "type": t('services-page.type2'),
      "title": t('services-page.title2'),
      "text": t('services-page.text2'),
      "list-elements": [
        t('services-page.list2Item1'),
        t('services-page.list2Item2'),
        t('services-page.list2Item3'),
        t('services-page.list2Item4'),
        t('services-page.list2Item5'),
        t('services-page.list2Item6')
      ]
    },
    {
      "id": 3,
      "image": `/assets/imgs/services/3.jpg`,
      "number": "03.",
      "type": t('services-page.type3'),
      "title": t('services-page.title3'),
      "text": t('services-page.text3'),
      "list-elements": [
        t('services-page.list3Item1'),
        t('services-page.list3Item2'),
        t('services-page.list3Item3'),
        t('services-page.list3Item4'),
        t('services-page.list3Item5'),
        t('services-page.list3Item6')
      ]
    }
  ];

  return (
    <section className="portfolio-fixed">
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-lg-6 rest" style={{ position: 'relative' }}>
            <div className="left" id="sticky_item">
              {
                data.map((item, index) => (
                  <div id={`tab-${index + 1}`} className="img bg-img" data-background={`${prefix}/dark/${item.image}`} key={index} />
                ))
              }
            </div>
          </div>
          <div className="col-lg-6 sub-bg right">
            {
              data.map((item, index) => (
                <div className={`cont ${index === 0 ? 'active' : ''}`} data-tab={`tab-${index + 1}`} key={index}>

                  <span className="sub-title mb-15">{item.number} {item.type}</span>
                  <h2 className="mb-15">{item.title}.</h2>
                  <div className="row justify-content-center">
                    <div className="col-md-11">
                      <p>{item.text}.</p>
                      <ul className="rest list-arrow mt-30">
                        {item["list-elements"].map((element, idx) => (
                          <li key={idx}>
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      marginRight: '10px' // Adjust the margin as needed
                                    }}
                                  >
                              <span className="icon">
                                <svg width="100%" height="100%" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z" fill="currentColor"></path>
                                </svg>
                              </span>
                              <h6 className="inline fz-16 fw-400">{element}</h6>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesScroll;
