import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import prefix from '@/common/prefix';
function Projects() {
  const { t, i18n, ready } = useTranslation('common', );
  


  
  const [data, setData] = useState([
    {
      id: 1,
      picture: `${prefix}/dark/assets/imgs/projects/tebanko.png`,
      name: 'Tebanko',
      position: 'Servicios Fintech',
    },
    {
      id: 2,
      picture: `${prefix}/dark/assets/imgs/projects/tenth.png`,
      name: 'Tenth XR',
      position: 'Servicios de Realidad Virtual',
    },
    {
      id: 3,
      picture: `${prefix}/dark/assets/imgs/projects/shopiapp.png`,
      name: 'Shopi',
      position: 'E-Commerce',
    },
    {
      id: 4,
      picture: `${prefix}/dark/assets/imgs/projects/tiluchiweb1.png`,
      name: 'Tiluchi Records',
      position: 'Record Label',
    },
    {
      id: 5,
      picture: `${prefix}/dark/assets/imgs/projects/smtsmwhr.png`,
      name: 'Sometime, Somewhere',
      position: 'Feature Documentary',
    },
    {
      id: 6,
      picture: `${prefix}/dark/assets/imgs/projects/tactoweb.png`,
      name: 'Tacto Desarrolladores',
      position: 'Bienes Raíces',
    },
  ]);

  return (
    <section className="team-crev section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="position-re">
              <h6 className="dot-titl mb-10">{t('experiences')}</h6>
              <h2 className="fz-70 fw-700">{t('projects')}</h2>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-center">
            <div className="text">
              <p>{t('p-projects')}</p>
            </div>
          </div>
        </div>
        <div className="row md-marg mt-50">
          {data.map((item) => (
            <div className="col-lg-4" key={item.id}>
              <div className="swiper-slide mb-50 hover-project">
                <div className="item background-lights">
                  <div className="img">
                    <img src={item.picture} height="200px" alt={item.name} />
                  </div>
                  <div className="info">
                    <div className="main-marq team-position">
                      <div className="slide-har st1 non-strok">
                        <div className="box">
                          {new Array(5).fill().map((_, i) => (
                            <div className="item" key={i}>
                              <h4>{item.position}</h4>
                            </div>
                          ))}
                        </div>
                        <div className="box">
                          {new Array(5).fill().map((_, i) => (
                            <div className="item" key={i}>
                              <h4>{item.position}</h4>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="main-marq team-name">
                      <div className="slide-har st1 non-strok">
                        <div className="box">
                          {new Array(5).fill().map((_, i) => (
                            <div className="item" key={i}>
                              <h4>{item.name}</h4>
                            </div>
                          ))}
                        </div>
                        <div className="box">
                          {new Array(5).fill().map((_, i) => (
                            <div className="item" key={i}>
                              <h4>{item.name}</h4>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Projects;
