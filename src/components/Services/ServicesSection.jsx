import React from 'react';
//= Components
import StatementSplitter from '@/components/Common/StatementSplitter';
//= Data
import { useState } from 'react';
import prefix from '@/common/prefix';
function ServicesSection({ lightMode }) {

  const [data, setData] = useState(  [
    {
      "id": 1,
      "image": "/assets/imgs/icons/0.png",
      "title": "Desarrollo de Software a Medida",
      "text": "Praesent faucibus nisl sit amet nulla pretium a sed purus."
    },
    {
      "id": 2,
      "image": "/assets/imgs/icons/1.png",
      "title": "Diseño UI/UX y Branding",
      "text": "Praesent faucibus nisl sit amet nulla pretium a sed purus."
    },
    {
      "id": 3,
      "image": "/assets/imgs/icons/2.png",
      "title": "Consultoría y Optimización de Software",
      "text": "Praesent faucibus nisl sit amet nulla pretium a sed purus."
    },
  ]);
  
  return (
    <section className="serv-box section-padding">
      <div className="container">
        <div className="sec-lg-head mb-80">
          <div className="row">
            <div className="col-lg-8">
              <div className="position-re">
                <h6 className="dot-titl mb-10">Servicios</h6>
                <h2 className="fz-60 fw-700">Nuestros Servicios</h2>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
              <div className="text">
                <p>Entregamos productos digitales de vanguardia que marcan la diferencia.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            data.map(item => (
              <div className="col-lg-4" key={item.id}>
                <div className="serv-item md-mb50 radius-10">
                  <div className="icon-img-60 mb-40">
                    <img src={`${prefix}/${lightMode ? 'light' : 'dark'}/${item.image}`} alt="" />
                  </div>
                  <h5 className="mb-30 pb-30 bord-thin-bottom"><StatementSplitter statement={item.title} /></h5>
                  <p>{item.text}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ServicesSection