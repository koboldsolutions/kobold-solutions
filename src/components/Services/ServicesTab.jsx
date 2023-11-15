import React from 'react';
import Link from 'next/link';
import prefix from '@/common/prefix';
function ServicesTab({ lightMode }) {
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
                    <img src={`${prefix}//${lightMode ? 'light' : 'dark'}/assets/imgs/services/1.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`${prefix}//${lightMode ? 'light' : 'dark'}/assets/imgs/icons/0.png`} alt="" />
                    </div>
                    <div className="text">
                      <p>Tu visión y objetivos son el corazón de cada decisión que tomamos. A través de la comunicación abierta y la colaboración, damos vida a tus ideas, 
                        asegurando que tu perspectiva única moldee el resultado.</p>
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-2">
                <div className="item">
                  <div className="img">
                    <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/services/2.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/icons/1.png`} alt="" />
                    </div>
                    <div className="text">
                      <p>La innovación está en nuestro ADN. Siempre buscamos nuevas formas de elevar tu proyecto, incorporando tecnologías de vanguardia y tendencias de diseño.</p>
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-3">
                <div className="item">
                  <div className="img">
                    <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/services/3.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/icons/2.png`} alt="" />
                    </div>
                    <div className="text">
                      <p>We are a creative studio specializing in design, development and strategy many different skills and disciplines in the production of all web.</p>
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-4">
                <div className="item">
                  <div className="img">
                    <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/services/1.jpg`} alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/assets/imgs/icons/0.png`} alt="" />
                    </div>
                    <div className="text">
                      <p>Tu audiencia está en el centro de nuestra estrategia. Diseñamos y desarrollamos teniendo en cuenta al usuario final, asegurándonos de que tu proyecto resuene con tu público objetivo.</p>
                    </div>
                    <Link href="/dark/page-services" className="mt-30">
                      <span className="mr-15">Read More</span>
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
                <h6 className="dot-titl mb-15">Filosofía</h6>
                <p>Tu éxito es nuestra meta final. Nuestras estrategias se basan en conocimientos impulsados por datos, asegurando que cada decisión contribuya a tu crecimiento y éxito. </p>
              </div>
              <ul className="rest">
                <li className="item-link current mb-15" data-tab="tabs-1" onClick={openTab}><span>01</span>Asociación Colaborativa</li>
                <li className="item-link mb-15" data-tab="tabs-2" onClick={openTab}><span>02</span>Innovación y Excelencia</li>
                <li className="item-link mb-15" data-tab="tabs-3" onClick={openTab}><span>03</span>Enfoque Centrado en el Usuario</li>
                <li className="item-link" data-tab="tabs-4" onClick={openTab}><span>04</span>Enfoque Orientado a Resultados</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesTab