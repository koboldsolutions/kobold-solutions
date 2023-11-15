import React from 'react';
//= Data
import { useState } from 'react';
import prefix from '@/common/prefix';

function Projects() {
    const [data, setData] = useState([
        {
          "id": 1,
          "picture": `${prefix}/dark/assets/imgs/projects/tebanko.png`,
          "name": "Tenth XR",
          "position": "Technology Services"
        },
        {
          "id": 2,
          "picture": `${prefix}/dark/assets/imgs/projects/tenth.png`,
          "name": "Shopi Bolivia",
          "position": "E-Commerce Platform"
        },
        {
          "id": 3,
          "picture": `${prefix}/dark/assets/imgs/projects/shopiapp.png`,
          "name": "TeBanko",
          "position": "Finntech Services"
        }
      ]);
  return (
    <section className="team-crev section-padding sub-bg">
      <div className="container">
      <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h6 className="dot-titl mb-10">Experiencias Exitosas en Acción.</h6>
                <h2 className="fz-70 fw-700">Proyectos Destacados</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text">
                <p>Colección de proyectos destacados que reflejan nuestra pasión por la creatividad y la excelencia en cada detalle.</p>
              </div>
            </div>
          </div>
        <div className="row md-marg">
          {
            data.map((item) => (
              <div className="col-lg-4" key={item.id}>
                <div className="swiper-slide mb-50">
                  <div className="item">
                    <div className="img">
                      <img src={item.picture} height="200px" alt="" />
                    </div>
                    <div className="info">
                      <div className="main-marq team-position">
                        <div className="slide-har st1 non-strok">
                          <div className="box">
                            {
                              new Array(5).fill().map((_, i) => (
                                <div className="item" key={i}>
                                  <h4>{item.position}</h4>
                                </div>
                              ))
                            }
                          </div>
                          <div className="box">
                            {
                              new Array(5).fill().map((_, i) => (
                                <div className="item" key={i}>
                                  <h4>{item.position}</h4>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                      <div className="main-marq team-name">
                        <div className="slide-har st1 non-strok">
                          <div className="box">
                            {
                              new Array(5).fill().map((_, i) => (
                                <div className="item" key={i}>
                                  <h4>{item.name}</h4>
                                </div>
                              ))
                            }
                          </div>
                          <div className="box">
                            {
                              new Array(5).fill().map((_, i) => (
                                <div className="item" key={i}>
                                  <h4>{item.name}</h4>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects