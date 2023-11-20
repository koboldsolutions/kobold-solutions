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
      "text": "Entendemos tu necesidad y la traemos a la vida, puede ser con desarrollo directo o con herramientas de Low-Code o NoCode, de acuerdo a tu necesidad."
    },
    {
      "id": 2,
      "image": "/assets/imgs/icons/1.png",
      "title": "E-Commerce y CRMs",
      "text": "Transformamos tu visión en experiencias de compra, con con desarrollo directo o con herramientas de Low-Code o NoCode (WordPress-WooCommerce, Shopify, CRMs y más)"
    },
    {
      "id": 3,
      "image": "/assets/imgs/icons/2.png",
      "title": "Consultoría y Optimización de Software",
      "text": "Compartimos nuestro conocimiento y experiencias para ayudarte a realizar tu siguiente paso."
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
                <p></p>
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