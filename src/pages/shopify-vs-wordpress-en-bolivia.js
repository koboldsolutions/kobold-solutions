import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
import Navbar from '@/components/Common/MainNavbar';
import Footer from '@/components/Common/Footer';
import BlogHeader from '@/components/Blog/Details/BlogHeader';
import BlogContent from '@/components/Blog/Details/BlogContent';
import Link from 'next/link';
import prefix from '@/common/prefix';

function Blog1() {
  

  return (
    <>
      <Head>
        <title>Kobold Solutions - Contact</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main>
      <header className="page-header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="caption">
              <div className="sub-title fz-12">
                <a href="#0"><span>Marketing</span></a>
                <span> , </span>
                <a href="#0"><span>Diseño</span></a>
              </div>
              <h1 className="fz-55 mt-30">Shopify vs. WordPress en Bolivia: Cuándo Usar Cada Solución</h1>
            </div>
            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <a href="#0" className="circle-60">
                        <img src={`${prefix}/dark/assets/imgs/koboldlogo02.png`}  alt="" className="circle-img" />
                      </a>
                      <a href="#0" className="ml-20">
                        <span className="opacity-7">Autor</span>
                        <h6 className="fz-16">Kobold Solutions</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-info ml-auto">
              <a href="#0">
                      <span className="opacity-7">Publicado</span>
                      <h6 className="fz-16">16 de Octubre, 2023</h6>
                    </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="background bg-img parallaxie mt-80 img-400" data-background={`${prefix}/dark/assets/imgs/blog/header.jpg`}>

      <img src={`${prefix}/dark/assets/imgs/blog/blog1/stock.jpg`} alt="" />
      </div>
      

    </header>
    <section className="blog section-padding pb-0">
    <div className="container">
      <div className="main-post">
        <div className="item pb-60">
          <div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="text">
                  <div className="d-flex align-items-center">
                    <span className="fz-60 fw-600 main-color line-height-1 mr-10">E</span>
                    <p>n Kobold te explicamos la diferencia para cada uno y el contexto del ecommerce en Bolivia.</p>
                  </div>
                  <p>En el ecommerce, la elección de la plataforma adecuada para tienda es esencial. Dos opciones populares son Shopify y WordPress, cada una con sus propias ventajas y desventajas.</p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h4 className="fw-600">Shopify: E-commerce simplficado</h4>
                  
                </div>
                <div className="mb-50 mt-50">
            <div className="row">
              <div className="col-sm-6">
                <div className="iner-img sm-mblogpic0">
                  <img src={`${prefix}/dark/assets/imgs/blog/blog1/shopify-logo.png`} alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iner-img">
                  <img src={`${prefix}/dark/assets/imgs/blog/blog1/blog1-transparent.png`}  alt="" />
                </div>
              </div>
            </div>
          </div>
                <div >
                  <h5 className="title mt-30">¿Qué es Shopify? </h5>
                  <p className="text mt-20">Shopify es una plataforma de comercio electrónico. Es muy simple y facil de usar, 
                    lo que la hace ideal para comerciantes que no tienen experiencia técnica y que desean probar su operación 
                    con un riesgo bajo, ideal para el mercado boliviano que se encuentra en desarrollo. </p>
                  <p className="text mt-20">Actualmente disponible en Bolivia con algunas funcionalidades.</p>
                  <h5 className="title mt-30">¿Cuándo Usar Shopify?</h5>
                  <p className="text mt-20"><b className="fw-500">E-commerce puro: </b>Shopify es la elección obvia si tu objetivo principal es vender productos en línea. Ofrece una amplia gama de características específicas para el comercio electrónico, como carritos de compra, pasarelas de pago, administración de inventario y herramientas de seguimiento de pedidos.</p>
                  <p className="text mt-20"><b className="fw-500">Facilidad de uso: </b>Si no tienes conocimientos técnicos, Shopify es una excelente opción. La plataforma es intuitiva y tienen plantillas pre-diseñadas que facilitan personalización de una tienda en línea profesional sin la necesidad de codificar.
Soporte al cliente: Shopify ofrece un servicio de soporte al cliente tremendo, lo que es escencial para resolver problemas rápidamente.</p>
                    <p className="text mt-20"><b className="fw-500">Escalabilidad: </b>Shopify es escalable, lo que significa que puedes comenzar con una tienda pequeña y hacer crecer tu negocio a medida que se expande.</p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="title mt-30">
                  <h4 className="fw-600">WordPress: Flexible y Personalizable</h4>
                </div>
                <div className="mb-50 mt-50">
            <div className="row">
              <div className="col-sm-6">
                <div className="iner-img sm-mblogpic0">
                  <img src={`${prefix}/dark/assets/imgs/blog/blog1/woo-trans.png`} alt="" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="iner-img">
                  <img src={`${prefix}/dark/assets/imgs/blog/blog1/wp-logo.png`} alt="" />
                </div>
              </div>
            </div>
          </div>
                <div >
                  <h5 className="title mt-30">¿Qué es WordPress?</h5>
                  <p className="text mt-20">WordPress es una plataforma de gestión de contenido (CMS) ampliamente utilizada en todo tipo de web. Es una opción muy adaptable que permite una alta personalización y flexibilidad. </p>
                  <p className="text mt-20">Actualmente disponible en Bolivia con algunas funcionalidades.</p>
                  <h5 className="title mt-30">¿Cuándo Usar WordPress?</h5>
                  <p className="text mt-20"><b className="fw-500">Contenido y comercio: </b>Si planeas crear un sitio web que combine contenido con funcionalidades de comercio electrónico. Puedes utilizar complementos como WooCommerce para añadir características de tienda en línea a tu sitio WordPress.</p>
                  <p className="text mt-20"><b className="fw-500">Control total: </b>Si deseas un control completo sobre el diseño y la funcionalidad de tu sitio web, WordPress te brinda la libertad para personalizarlo según tus necesidades.</p>
                  <p className="text mt-20"><b className="fw-500">Desarrollo web avanzado:  </b>WordPress es una elección acertada si tienes habilidades de desarrollo web o planeas contratar a un desarrollador. Ofrece una amplia variedad de complementos y temas para satisfacer las necesidades específicas de tu sitio.</p>
                  <p className="text mt-20"><b className="fw-500">SEO:  </b>WordPress es amigable con los motores de búsqueda (para aparecer en las primeras opciones de búsqueda) y ofrece una serie de plug-ins o complementos que facilitan la optimización para motores de búsqueda (SEO).</p>
                </div>
                <p className="text mt-50">En resumen, la elección entre Shopify y WordPress depende de tus necesidades específicas y de tu nivel de experiencia técnica, en el primer caso la curva de aprendizaje es muy baja mientras que para Wordpress es un poco más alta pero todavía es bastante amigable. </p>
              </div>
              
            </div>
          </div>

          

          {/* <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="post-qoute mt-50">
                <h6 className="fz-20">
                  <span className="l-block">Aumenta el tráfico de tu página web con las siguientes librerías SEO.</span>
                  <span className="sub-title main-color mt-20 mb-0"> - Martin Fleig</span>
                </h6>
              </div>
            </div>
          </div> */}


        </div>
        <div className="info-area flex mt-20 pb-20">
          <div>
            <div className="tags flex">
              <div className="valign">
                <span>Tags :</span>
              </div>
              <div>
                <Link href="/blogs">Marketing</Link>
                <Link href="/blogs">Diseño</Link>
              </div>
            </div>
          </div>

        </div>
        <div className="author-area mt-50">
          <div className="flex">
            <div className="author-img mr-30">
              <div className="img">
                <img src={`${prefix}/dark/assets/imgs/koboldlogo02.png`} alt="" className="circle-img" />
              </div>
            </div>
            <div className="cont valign">
              <div className="full-width">
                <h6 className="fw-600 mb-10">Kobold Solutions</h6>
                {/* <p>Ingeniero de Software, fundador de Kobold.</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="next-prv-post flex mt-50">
          {/* <div className="thumb-post bg-img" data-background="/dark/assets/imgs/blog/blogpic.jpg">
            <Link href="/blog">
              <span className="fz-12 text-u ls1 main-color mb-15"><i className="pe-7s-angle-left"></i> Anterior Blog</span>
              <h6 className="fw-600 fz-16">5 maneras de aumentar el tráfico en tu página web.</h6>
            </Link>
          </div> */}
          <div className="thumb-post ml-auto text-right bg-img" data-background={`${prefix}/dark/assets/imgs/blog/blogpic.jpg`}>
            <Link href="/cuanto-necesitas-un-ecommerce">
              <span className="fz-12 text-u ls1 main-color mb-15">Próximo Blog <i
                className="pe-7s-angle-right"></i></span>
              <h6 className="fw-600 fz-16">¿Cuándo Necesitas un eCommerce? Señales de que es el Momento Adecuado</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </section>
      </main>
      <Footer />
    </>
  )
}

Blog1.getLayout = page => <Layout>{page}</Layout>

export default Blog1;